import { pluck } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will take one property from an array of objects', () => {
		const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
		const result = pluck(array, 'a');
		expect(result).toEqual([1, 2, 3]);
	});

	it('will ignore properties that are not requested', () => {
		const array = [
			{ a: 1, b: 2 },
			{ a: 2, b: 3 },
			{ a: 3, b: 4 },
		];
		const result = pluck(array, 'a');
		expect(result).toEqual([1, 2, 3]);
	});
	it('will throw an error if the input is not an array', () => {
		const array = 'not an array' as any;
		// @ts-expect-error - Generics are more STRONK than any
		const result = () => pluck(array, a);
		expect(result).toThrow();
	});
});
