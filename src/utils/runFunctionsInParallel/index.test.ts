import { sleep } from '../sleep';
import { runFunctionsInParallel } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will run the correct amount of times', async () => {
		let globalI = 0;
		async function foo() {
			globalI++;
		}
		await runFunctionsInParallel(5, [foo, foo, foo, foo, foo, foo, foo, foo, foo, foo]);
		expect(globalI).toBe(10);
	});

	// I don't know why but sleep does not work properly in Bun
	it.skip('will run in parallel at the expected speed', async () => {
		async function foo() {
			await sleep(10);
		}
		const startTime = Date.now();

		await runFunctionsInParallel(2, [foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo, foo]);
		const endTime = Date.now();
		expect(endTime - startTime).toBeLessThan(300);
		expect(endTime - startTime).toBeGreaterThan(90);
	});
});
