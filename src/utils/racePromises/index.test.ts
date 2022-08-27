import { racePromises } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return one promise', async () => {
		const promise = new Promise((resolve) => {
			setTimeout(() => {
				resolve('one');
			}, 100);
		});
		const result = await racePromises([promise]);
		expect(result).toBe('one');
	});

	it('will return the first promise to resolve', async () => {
		const promise1 = new Promise((resolve) => {
			setTimeout(() => {
				resolve('one');
			}, 100);
		});
		const promise2 = new Promise((resolve) => {
			setTimeout(() => {
				resolve('two');
			}, 200);
		});
		const result = await racePromises([promise1, promise2]);
		expect(result).toBe('one');
	});
});
