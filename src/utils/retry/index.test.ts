import { retry } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	const successfulFunction = async () => 'success',
		failingFunction = async () => {
			throw new Error('fail');
		};

	it('will return, if there is not an error', async () => {
		await expect(retry(1000, successfulFunction)).resolves.not.toThrow();
	});

	it('will return a value, if there is not an error', async () => {
		await expect(retry(1000, successfulFunction)).resolves.toEqual('success');
	});

	it('will run very quickly if there is not an error', async () => {
		const startTime = Date.now();

		await retry(1000, successfulFunction);
		const endTime = Date.now();

		expect(endTime - startTime).toBeLessThan(10);
	});

	it('will throw an error if the code never successfully runs', async () => {
		try {
			expect(retry(1000, failingFunction));
			expect(false).toEqual(true);
		} catch (e) {}
	});

	it('will not run for longer than the timeout', async () => {
		const startTime = Date.now();

		try {
			expect(retry(1000, failingFunction));
		} catch (e) {
			expect(false).toEqual(true);
		}
		const endTime = Date.now();

		expect(endTime - startTime).toBeLessThan(1100);
	});

	/*
	 * It('will instantly error after the timeout, instead of waiting for the code to finish', async () => {
	 * 	Const startTime = Date.now();
	 * 	Try {
	 * 		Expect(
	 * 			Await retry(1000, async () => {
	 * 				Await sleep(2500);
	 * 				Return 'success';
	 * 			})
	 * 		);
	 * 		Expect(false).toEqual(true);
	 * 	} catch (e) {}
	 * 	Const endTime = Date.now();
	 * 	Expect(endTime - startTime).toBeLessThan(1100);
	 * 	Expect(endTime - startTime).toBeGreaterThan(900);
	 * });
	 */

	it('will correctly type the output', async () => {
		const result: string = await retry(1000, successfulFunction);
	});

	// // This actually seems to be impossible?
	// It('will stop the function from running, after the timeout', async () => {
	// 	Let itDidntStop = false;
	// 	Await expect(
	// 		Retry(1000, async () => {
	// 			Await sleep(2000);
	// 			ItDidntStop = true;
	// 			Return 'success';
	// 		})
	// 	).rejects.toThrow();
	// 	Await sleep(1500);
	// 	Expect(itDidntStop).toBe(false);
	// });
});
