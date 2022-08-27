import { shuffleArray } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will shuffle an array in-place', async () => {
		let arrayShuffled: number[] = [];
		let arrayInitial: number[] = []; // this array will not be changed
		for (let i = 0; i < 100; i++) {
			arrayShuffled.push(i);
			arrayInitial.push(i);
		}

		shuffleArray(arrayShuffled);
		expect(arrayShuffled).not.toEqual(arrayInitial);
	});

	it('will not return an array', async () => {
		let arrayShuffled: number[] = [];
		for (let i = 0; i < 100; i++) {
			arrayShuffled.push(i);
		}

		const result = shuffleArray(arrayShuffled);
		expect(result).toBeUndefined();
	});

	it('will do nothing if given an empty array', async () => {
		let arrayShuffled: number[] = [];
		const result = shuffleArray(arrayShuffled);
		expect(result).toBeUndefined();
	});
});
