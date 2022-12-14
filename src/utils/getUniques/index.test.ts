import { getUniques } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will find one unique value in an array', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const result = getUniques(array);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('will only return one value if there are duplicates', () => {
		const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		const result = getUniques(array);
		expect(result).toEqual([1]);
	});

	it('will filter objects, and check for deep equality', () => {
		const array = [{ id: 1 }, { id: 2 }, { id: 1 }];
		const result = getUniques(array);
		expect(result).toEqual([{ id: 1 }, { id: 2 }]);
	});

	it('will return an empty array if passed an empty array', () => {
		const array: never[] = [];
		const result = getUniques(array);
		expect(result).toEqual([]);
	});
});
