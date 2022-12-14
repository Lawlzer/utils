import { keys } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will work in a TypeScript-friendly way', () => {
		const obj = {
			one: 1,
			two: 2,
			three: 3,
		};
		const result = keys(obj);
		expect(result).toEqual(['one', 'two', 'three']);
	});

	it('will return the same output as Object.keys', () => {
		const obj = {
			one: 1,
			two: 2,
			three: 3,
		};
		const result = keys(obj);
		const result2 = Object.keys(obj);
		expect(result).toEqual(result2);
	});
});
