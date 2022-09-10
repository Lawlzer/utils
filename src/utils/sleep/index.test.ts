import { sleep } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not do anything if called without async', async () => {
		let start = Date.now();
		sleep(1000);
		let end = Date.now();
		expect(end - start).toBeLessThan(100);
	});

	it('will sleep for the specified amount of time', async () => {
		let start = Date.now();
		await sleep(1000);
		let end = Date.now();
		expect(end - start).toBeGreaterThan(800);
		expect(end - start).toBeLessThan(1200);
	});

	it('will work for strings that represent numbers (ms)', async () => {
		let start = Date.now();
		await sleep('1s');
		let end = Date.now();
		expect(end - start).toBeGreaterThan(900);
		expect(end - start).toBeLessThan(1100);
	});

	it('will throw an error if inputTime is not a number or a string', async () => {
		// @ts-expect-error We are not passing in a number or a string
		await expect(async () => await sleep(undefined)).rejects.toThrowError();
	});

	it('will throw an error if inputTime is a non-ms-able string', async () => {
		await expect(async () => await sleep('hello world')).rejects.toThrowError();
	});
});
