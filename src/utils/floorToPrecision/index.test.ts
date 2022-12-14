import { floorToPrecision } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will floor a number to a specific decimal place', () => {
		const result = floorToPrecision(1.2345, 2);
		expect(result).toEqual(1.23);
	});

	it('will error if we pass a string as the number-to-floor', () => {
		// @ts-expect-error We are not passing in a string.
		expect(() => floorToPrecision('1.2345', 2)).toThrow();
	});

	it('will error if we pass a string as the precision', () => {
		// @ts-expect-error We are not passing in a string.
		expect(() => floorToPrecision(1.2345, '2')).toThrow();
	});
});
