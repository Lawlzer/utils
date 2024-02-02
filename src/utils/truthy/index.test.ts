import { truthy } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return true for truthy values', () => {
		expect(truthy('foo')).toBe(true);
		expect(truthy(1)).toBe(true);
		expect(truthy(-1)).toBe(true);
		expect(truthy(true)).toBe(true);
	});

	it('will return false for falsy values', () => {
		expect(truthy('')).toBe(false);
		expect(truthy(0)).toBe(false);
		expect(truthy(false)).toBe(false);
		expect(truthy(null)).toBe(false);
		expect(truthy(undefined)).toBe(false);
	});

	it('will work correctly with filters (which is the main purpose)', () => {
		const inputArray = ['foo', '', undefined, 'bar', null, 1];
		const filteredArray = inputArray.filter(truthy);
		expect(filteredArray).toEqual(['foo', 'bar', 1]);
	});
});
