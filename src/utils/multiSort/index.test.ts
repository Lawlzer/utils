import { multiSort } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will sort an array of objects with numbers by one key', () => {
		const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];
		expect(multiSort(arr, 'a')).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});

	it('will return the sorted array', () => {
		const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];
		const result = multiSort(arr, 'a');
		expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});

	it('will sort in-place', () => {
		const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];
		multiSort(arr, 'a');
		expect(arr).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
	});

	it('will sort an array with multiple objects by multiple keys', () => {
		const arr = [
			{ a: 3, b: 1 },
			{ a: 1, b: 2 },
			{ a: 2, b: 3 },
		];
		expect(multiSort(arr, 'a', 'b')).toEqual([
			{ a: 1, b: 2 },
			{ a: 2, b: 3 },
			{ a: 3, b: 1 },
		]);
	});
});
