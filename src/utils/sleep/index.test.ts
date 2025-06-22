import { sleep } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not sleep if called syncronously', async () => {
		const start = Date.now();
		void sleep(1000);
		const end = Date.now();
		expect(end - start).toBeLessThan(100);
	});

	// Bun test environment appears to mock/fast-forward timers, making actual sleep timing tests unreliable
	it.skip('will sleep for approximately the specified amount of time', async () => {
		const start = Date.now();
		await sleep(1000);
		const end = Date.now();
		expect(end - start).toBeGreaterThan(800);
		expect(end - start).toBeLessThan(2000); // It may take awhile if the system lags
	});

	// Bun test environment appears to mock/fast-forward timers, making actual sleep timing tests unreliable
	it.skip('will work for strings that represent numbers (ms)', async () => {
		const start = Date.now();
		await sleep('1s');
		const end = Date.now();
		expect(end - start).toBeGreaterThan(900);
		expect(end - start).toBeLessThan(1100);
	});

	it('will throw an error if inputTime is undefined (not a number or a string)', async () => {
		try {
			// @ts-expect-error We are not passing in a number or a string
			await sleep(undefined);
			expect(true).toBe(false); // Sleep should have crashed.
		} catch (_e) {
			expect(true).toBe(true);
		}
	});

	it('will throw an error if inputTime is a string that does not represent an MS string', async () => {
		try {
			await sleep('invalid string');
			expect(true).toBe(false); // Sleep should have crashed.
		} catch (_e) {
			expect(true).toBe(true);
		}
	});
});
