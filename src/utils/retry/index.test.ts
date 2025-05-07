import { sleep } from '../sleep'; // Import sleep for one test case
import { retry } from './index';

// Mock sleep using Jest
jest.mock('../sleep', () => ({
	sleep: jest.fn().mockResolvedValue(undefined),
}));

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	const successfulFunction = jest.fn(async () => 'success');
	const failingFunction = jest.fn(async () => {
		throw new Error('Intentional fail');
	});
	const slowSuccessFunction = jest.fn(async () => {
		// We don't actually need the real sleep here since we're using Jest mocks/timers if needed
		// But keeping it doesn't hurt for this example. If timing was critical, use jest.advanceTimersByTime
		await sleep(50);
		return 'slow success';
	});
	const verySlowFunction = jest.fn(async () => {
		await sleep(500);
		return 'too slow';
	});

	// Reset mocks before each test
	beforeEach(() => {
		successfulFunction.mockClear();
		failingFunction.mockClear();
		slowSuccessFunction.mockClear();
		verySlowFunction.mockClear();
		// Also clear the mocked sleep calls
		(sleep as jest.Mock).mockClear();
	});

	it('will return the value if the function succeeds immediately', async () => {
		await expect(retry(100, successfulFunction)).resolves.toEqual('success');
		expect(successfulFunction).toHaveBeenCalledTimes(1);
	});

	it('will return the value if the function succeeds after a few tries', async () => {
		let attempts = 0;
		const succeedOnThirdTry = jest.fn(async () => {
			// Use jest.fn here too
			attempts++;
			if (attempts < 3) {
				throw new Error(`Fail attempt ${attempts}`);
			}
			return 'third time lucky';
		});
		await expect(retry(200, succeedOnThirdTry)).resolves.toEqual('third time lucky');
		expect(attempts).toBe(3);
		expect(succeedOnThirdTry).toHaveBeenCalledTimes(3);
		// Check that sleep(10) was called between failed attempts + for race
		// 2 for explicit retry delays, 3 for Promise.race internal timeouts
		expect(sleep).toHaveBeenCalledTimes(5);
		expect(sleep).toHaveBeenCalledWith(10);
	});

	it('will run quickly if the function succeeds immediately', async () => {
		const startTime = Date.now();
		await retry(100, successfulFunction);
		const endTime = Date.now();
		// Should be much less than the timeout
		expect(endTime - startTime).toBeLessThan(50);
	});

	it('should reject with a timeout error if the function never succeeds', async () => {
		const timeout = 50; // ms
		// This test expects the specific timeout error from retry's throwError
		await expect(retry(timeout, failingFunction)).rejects.toThrow(`Timeout of ${timeout}ms exceeded`);
		// Check that failingFunction was called at least once, and sleep(10) potentially multiple times
		expect(failingFunction).toHaveBeenCalled();
		expect(sleep).toHaveBeenCalledWith(10);
	});

	it('should reject with a timeout error if the function is too slow', async () => {
		const timeout = 100; // ms
		// verySlowFunction takes 500ms, which is > timeout
		// This test is tricky because verySlowFunction uses sleepModule.sleep directly.
		// The retry function's internal race uses the mocked sleep.
		// For the purpose of this test, we expect a timeout error from retry.
		await expect(retry(timeout, verySlowFunction)).rejects.toThrow(/Timeout of 100ms exceeded \(function call timed out within its slot\)/);
		// verySlowFunction should be called once, but timeout before it finishes
		expect(verySlowFunction).toHaveBeenCalledTimes(1);
		// sleep(10) should not be called if the first fn call times out directly
		// due to the internal Promise.race.
		// However, the Promise.race itself calls sleep(remainingTime).
		// We only care that the *retry delay* sleep(10) isn't called.
		const callsToSleepWith10 = (sleep as jest.Mock).mock.calls.filter((call: [number]) => call[0] === 10).length;
		expect(callsToSleepWith10).toBe(0);
	});

	it('will reject within a reasonable time close to the timeout', async () => {
		const timeout = 100; // ms
		const startTime = Date.now();

		// Use the failing function which throws immediately
		await expect(retry(timeout, failingFunction)).rejects.toThrow();

		const endTime = Date.now();
		const duration = endTime - startTime;

		// Should be slightly more than timeout due to processing, but not excessively so
		// Allow it to be slightly less if timeout is triggered by "not enough time for next retry+delay"
		expect(duration).toBeGreaterThanOrEqual(timeout - 15); // e.g. 85 for 100ms timeout
		expect(duration).toBeLessThan(timeout + 100); // Add some buffer
	});

	it('will correctly type the output', async () => {
		// This test just checks TS typing, no runtime assertion needed if it compiles
		const result: string = await retry(100, successfulFunction);
		expect(result).toBe('success'); // Add runtime check for completeness
	});
});
