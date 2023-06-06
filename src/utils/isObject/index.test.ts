import { isObject } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return true for valid objects', () => {
		expect(isObject({})).toBe(true);
		expect(isObject({ key: 'value' })).toBe(true);
		expect(isObject([])).toBe(true);
		expect(isObject(new Date())).toBe(true);
	});

	it('will return false for non-objects', () => {
		expect(isObject(null)).toBe(false);
		expect(isObject(undefined)).toBe(false);
		expect(isObject(42)).toBe(false);
		expect(isObject('test')).toBe(false);
		expect(isObject(true)).toBe(false);

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		expect(isObject(() => {})).toBe(false);
	});
});
