import { clamp } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will clamp a number from max', () => {
		const value = clamp(10, 0, 5);
		expect(value).toBe(5);
	});

	it('will clamp a number from min', () => {
		const value = clamp(0, 0, 5);
		expect(value).toBe(0);
	});

	it('will clamp a number in between max and min', () => {
		const value = clamp(2, 0, 5);
		expect(value).toBe(2);
	});

	it('will throw an error if value is not a number', () => {
		expect(() => {
			// @ts-expect-error We are not passing in a number.
			clamp('a', 0, 5);
		}).toThrow();
	});

	it('will throw an error if min is not a number', () => {
		expect(() => {
			// @ts-expect-error We are not passing in a number.
			clamp(0, 'a', 5);
		}).toThrow();
	});

	it('will throw an error if max is not a number', () => {
		expect(() => {
			// @ts-expect-error We are not passing in a number.
			clamp(0, 0, 'a');
		}).toThrow();
	});
});
