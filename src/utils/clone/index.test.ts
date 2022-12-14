import { clone } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will clone an array', () => {
		const input = [1, 2, 3];
		const output = clone(input);
		expect(output).toEqual(input);
		expect(output).not.toBe(input);
	});

	it('will clone an object', () => {
		const input = { a: 1, b: 2, c: 3 };
		const output = clone(input);
		expect(output).toEqual(input);
		expect(output).not.toBe(input);
	});

	it('will clone an object with nested arrays', () => {
		const input = { a: 1, b: 2, c: [1, 2, 3] };
		const output = clone(input);
		expect(output).toEqual(input);
		expect(output).not.toBe(input);
	});

	it('will clone an object with nested objects', () => {
		const input = { a: 1, b: 2, c: { a: 1, b: 2, c: 3 } };
		const output = clone(input);
		expect(output).toEqual(input);
		expect(output).not.toBe(input);
	});
});
