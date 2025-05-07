// @ts-nocheck
import { mock, beforeEach, afterEach, describe, it, expect } from 'bun:test';
import { retry } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	let mockSleepFn: ReturnType<typeof mock>;

	const successfulFunction = mock(async () => 'success');
	const failingFunction = mock(async () => {
		throw new Error('Intentional fail');
	});
	const slowSuccessFunction = mock(async () => 'slow success');
	const verySlowFunction = mock(async () => 'too slow');

	beforeEach(() => {
		mockSleepFn = mock(async () => Promise.resolve(undefined));
		successfulFunction.mockClear();
		failingFunction.mockClear();
		slowSuccessFunction.mockClear();
		verySlowFunction.mockClear();
	});

	afterEach(() => {
		mockSleepFn.mockClear();
	});

	it('will return the value if the function succeeds immediately', async () => {
		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await expect(retry(100, successfulFunction as unknown as () => Promise<string>, castedMockSleep)).resolves.toEqual('success');
		expect(successfulFunction).toHaveBeenCalledTimes(1);
		expect(mockSleepFn).toHaveBeenCalledTimes(1);
	});

	it('will return the value if the function succeeds after a few tries', async () => {
		let attempts = 0;
		const succeedOnThirdTry = mock(async () => {
			attempts++;
			if (attempts < 3) {
				throw new Error(`Fail attempt ${attempts}`);
			}
			return 'third time lucky';
		});

		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await expect(retry(200, succeedOnThirdTry as unknown as () => Promise<string>, castedMockSleep)).resolves.toEqual('third time lucky');
		expect(attempts).toBe(3);
		expect(succeedOnThirdTry).toHaveBeenCalledTimes(3);
		expect(mockSleepFn).toHaveBeenCalledTimes(5);
		expect(mockSleepFn).toHaveBeenCalledWith(10);
	});

	it('will run quickly if the function succeeds immediately', async () => {
		const startTime = Date.now();

		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await retry(100, successfulFunction as unknown as () => Promise<string>, castedMockSleep);
		const endTime = Date.now();
		expect(endTime - startTime).toBeLessThan(50);
	});

	it('should reject with a timeout error if the function never succeeds', async () => {
		const timeoutMs = 50;

		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await expect(retry(timeoutMs, failingFunction as unknown as () => Promise<string>, castedMockSleep)).rejects.toThrow(`Timeout of ${timeoutMs}ms exceeded`);
		expect(failingFunction).toHaveBeenCalled();
	});

	it('should reject with a timeout error if the function is too slow', async () => {
		const timeoutMs = 100;
		const verySlowActualFunction = mock(async () => {
			await new Promise((r) => setTimeout(r, 500));
			return 'actually very slow';
		});

		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await expect(retry(timeoutMs, verySlowActualFunction as unknown as () => Promise<string>, castedMockSleep)).rejects.toThrow(`Timeout of ${timeoutMs}ms exceeded (function call timed out within its slot)`);
		expect(verySlowActualFunction).toHaveBeenCalledTimes(1);
		expect(mockSleepFn).toHaveBeenCalledTimes(1);
	});

	it('will reject within a reasonable time close to the timeout', async () => {
		const timeoutMs = 100;
		const startTime = Date.now();

		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		await expect(retry(timeoutMs, failingFunction as unknown as () => Promise<string>, castedMockSleep)).rejects.toThrow();
		const endTime = Date.now();
		const duration = endTime - startTime;
		expect(duration).toBeGreaterThanOrEqual(timeoutMs - 25);
		expect(duration).toBeLessThan(timeoutMs + 100);
	});

	it('will correctly type the output', async () => {
		const castedMockSleep = mockSleepFn as unknown as (duration: number) => Promise<void>;
		const result: string = await retry(100, successfulFunction as unknown as () => Promise<string>, castedMockSleep);
		expect(result).toBe('success');
	});
});
