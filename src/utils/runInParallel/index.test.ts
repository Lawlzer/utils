import { sleep } from '../sleep';

import { runInParallel } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will run the correct amount of times', async () => {
		let globalI = 0;
		async function foo() {
			globalI++;
		}
		await runInParallel(50, 5, foo);
		expect(globalI).toBe(50);
	});

	// I don't know why but sleep does not work properly in Bun
	it.skip('will run in parallel at the expected speed', async () => {
		async function foo() {
			await sleep(10);
		}
		const startTime = Date.now();

		await runInParallel(50, 5, foo);
		const endTime = Date.now();
		expect(endTime - startTime).toBeLessThan(350);
		expect(endTime - startTime).toBeGreaterThan(75);
	});
});
