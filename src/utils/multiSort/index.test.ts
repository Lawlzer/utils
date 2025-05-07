import { multiSort } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return undefined', () => {
		const arr = [{ a: 3 }, { a: 1 }, { a: 2 }];

		const result = multiSort(arr, 'a');
		expect(result).toEqual(undefined);
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
		multiSort(arr, 'a', 'b');
		expect(arr).toEqual([
			{ a: 1, b: 2 },
			{ a: 2, b: 3 },
			{ a: 3, b: 1 },
		]);
	});
});
