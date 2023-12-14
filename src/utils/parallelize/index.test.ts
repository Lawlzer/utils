import { sleep } from '../sleep';
import { runPromisesInParallel } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will run the correct amount of times', async () => {
		let globalI = 0;
		async function foo() {
			globalI++;
		}
		await runPromisesInParallel(5, [foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo()]);
		expect(globalI).toBe(10);
	});

	it('will run in parallel at the expected speed', async () => {
		async function foo() {
			await sleep(10);
		}
		const startTime = Date.now();

		await runPromisesInParallel(2, [foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo(), foo()]);
		const endTime = Date.now();
		expect(endTime - startTime).toBeLessThan(50);
		expect(endTime - startTime).toBeGreaterThan(19);
	});
});
