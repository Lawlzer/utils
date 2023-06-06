import { block } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will wait for the timeout', async () => {
		const startTime = Date.now();

		block(100);
		const endTime = Date.now();

		expect(endTime - startTime).toBeGreaterThan(90);
		expect(endTime - startTime).toBeLessThan(110);
	});

	it('will block the thread', async () => {
		const startTime = Date.now();

		setImmediate(() => {
			const endTime = Date.now();

			expect(endTime - startTime).toBeGreaterThan(90);
			expect(endTime - startTime).toBeLessThan(110);
		});
		block(100);
	});
});
