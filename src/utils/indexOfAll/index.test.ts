import { indexOfAll } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return the correct indexes for a substring present multiple times', () => {
		const input = 'this is a test string this is a test string';
		const find = 'this';
		const expectedIndexes = [0, 22];
		expect(indexOfAll(input, find)).toEqual(expectedIndexes);
	});
	it('will return an empty array when the substring is not present', () => {
		const input = 'hello world';
		const find = 'bye';
		expect(indexOfAll(input, find)).toEqual([]);
	});
	it('will return indexes for single character substrings', () => {
		const input = 'hello';
		const find = 'l';
		const expectedIndexes = [2, 3];
		expect(indexOfAll(input, find)).toEqual(expectedIndexes);
	});
	it('will return an empty array when the substring is empty', () => {
		const input = 'some text';
		const find = '';
		expect(indexOfAll(input, find)).toEqual([]);
	});
	it('will return multiple indexes when the substring is at the start and end', () => {
		const input = 'testtest testtest';
		const find = 'test';
		const expectedIndexes = [0, 4, 9, 13];
		expect(indexOfAll(input, find)).toEqual(expectedIndexes);
	});
	it('will return correct indexes when the substring overlaps', () => {
		const input = 'ababa';
		const find = 'aba';
		const expectedIndexes = [0, 2];
		expect(indexOfAll(input, find)).toEqual(expectedIndexes);
	});
	it('will handle special characters', () => {
		const input = 'sp3c!@l ch@r^ct3rs';
		const find = '@';
		const expectedIndexes = [5, 10];
		expect(indexOfAll(input, find)).toEqual(expectedIndexes);
	});
});
