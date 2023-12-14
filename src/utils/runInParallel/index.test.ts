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

	it('will run in parallel at the expected speed', async () => {
		async function foo() {
			await sleep(10);
		}
		const startTime = Date.now();

		await runInParallel(50, 5, foo);
		const endTime = Date.now();
		expect(endTime - startTime).toBeLessThan(250);
		expect(endTime - startTime).toBeGreaterThan(75);
	});
});
