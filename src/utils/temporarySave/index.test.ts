import fs from 'fs-extra';

import { temporarySave } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will create a file and return the path to it', async () => {
		const path = await temporarySave('');
		const pathExists = await fs.pathExists(path);
		expect(pathExists).toBe(true);
	});

	it('will create a file and save a string to the file', async () => {
		const data = 'Hello World';
		const path = await temporarySave(data);
		const fileData = await fs.readFile(path, 'utf8');
		expect(String(fileData)).toEqual(data);
	});

	it('will throw an error if the data is not a string', async () => {
		// @ts-expect-error We are passing in a number, instead of a string.
		await expect(temporarySave(100)).rejects.toThrowError();
	});
});
