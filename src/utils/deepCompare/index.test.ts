import path from 'path';

import { deepCompare } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return true if the objects are equal', () => {
		const result = deepCompare({ a: 1 }, { a: 1 });
		expect(result).toEqual(true);
	});

	it('will return false if the objects are not equal', () => {
		const result = deepCompare({ a: 1 }, { a: 2 });
		expect(result).toEqual(false);
	});

	it('will return true if nested objects are equal', () => {
		const result = deepCompare({ a: { b: 1 } }, { a: { b: 1 } });
		expect(result).toEqual(true);
	});

	it('will return false if nested objects are not equal', () => {
		const result = deepCompare({ a: { b: 1 } }, { a: { b: 2 } });
		expect(result).toEqual(false);
	});

	it('will work for nested arrays', () => {
		const result = deepCompare({ a: [1, 2, 3] }, { a: [1, 2, 3] });
		expect(result).toEqual(true);
	});

	it('will return false if nested arrays are not equal', () => {
		const result = deepCompare({ a: [1, 2, 3] }, { a: [1, 2, 4] });
		expect(result).toEqual(false);
	});

	it('will return false for objects with different keys', () => {
		const result = deepCompare({ a: 1 }, { b: 1 });
		expect(result).toEqual(false);
	});

	it('will work for Dates', () => {
		const result = deepCompare({ a: new Date(1) }, { a: new Date(1) });
		expect(result).toEqual(true);
	});
});
