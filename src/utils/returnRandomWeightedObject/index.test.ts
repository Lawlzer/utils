import { getRandomCharacters } from '~/utils/getRandomCharacters/index';

import { returnRandomWeightedObject } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return one object from an array of objects', () => {
		const array: { a: string; weight: number }[] = [];
		for (let i = 0; i < 1000; i++) {
			array.push({ a: getRandomCharacters(50, { lowerCase: true }), weight: 1 });
		}

		const result1 = returnRandomWeightedObject(array);
		const result2 = returnRandomWeightedObject(array);
		expect(result1).not.toEqual(result2);
	});

	it('will use the weights', () => {
		const array = [
			{ a: 1, weight: 100000000000000 },
			{ a: 2, weight: 1 },
			{ a: 3, weight: 1 },
		];
		for (let i = 0; i < 10; i++) {
			// Do it a "few" times to make sure
			expect(returnRandomWeightedObject(array)).toEqual({ a: 1, weight: 100000000000000 });
		}
	});

	it('will throw an error if passed an empty array', () => {
		expect(() => returnRandomWeightedObject([])).toThrowError();
	});

	it('will throw an error if passed in an object without weight', () => {
		// @ts-expect-error We are not passing in an object with weight.
		expect(() => returnRandomWeightedObject([{ a: 1 }])).toThrowError();
	});
});
