import fs from 'fs-extra';
import path from 'path';

import { pathToFileName } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will work with a filename', async () => {
		const fileName = await pathToFileName('test.txt');
		expect(fileName).toBe('test.txt');
	});

	it('will work with a /path/to/filename', async () => {
		const fileName = await pathToFileName('/path/to/test.txt');
		expect(fileName).toBe('test.txt');
	});

	it('will work with a \\path\\to\\filename (backslashes)', async () => {
		const fileName = await pathToFileName('\\path\\to\\test.txt');
		expect(fileName).toBe('test.txt');
	});

	it('will work from a drive letter', async () => {
		const fileName = await pathToFileName('C:\\path\\to\\test.txt');
		expect(fileName).toBe('test.txt');
	});

	it('will work with a /path/to/filename with no extension', async () => {
		const fileName = await pathToFileName('/path/to/test');
		expect(fileName).toBe('test');
	});

	it('will throw an error if the path is undefined', async () => {
		// @ts-expect-error
		await expect(pathToFileName(undefined)).rejects.toThrow();
	});
});
