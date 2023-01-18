import fs from 'fs-extra';
import path from 'path';

import { createTemporaryDirectory } from '../createTemporaryDirectory';
import { getNextOutputPath } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will create a directory that does not exist, and return 0', async () => {
		const testPath = await createTemporaryDirectory();

		// Delete the path
		await fs.remove(testPath);

		const nextOutput = await getNextOutputPath(path.resolve(testPath));
		expect(nextOutput).toBe(path.resolve(testPath, '0'));
	});

	it('will return 0, from an empty directory', async () => {
		const testPath = await createTemporaryDirectory();

		// There are no files, so it should return 0, for the first one
		const nextOutput = await getNextOutputPath(testPath);
		expect(nextOutput).toBe(path.resolve(testPath, '0'));
	});

	it('will return 1, from a single file named 0', async () => {
		const testPath = await createTemporaryDirectory();

		// Create a file named 0
		await fs.writeFile(path.resolve(testPath, '0'), '');

		const nextOutput = await getNextOutputPath(testPath);
		expect(nextOutput).toBe(path.resolve(testPath, '1'));
	});

	it('will return 4, from multiple files named 0, 1, 2, 3', async () => {
		const testPath = await createTemporaryDirectory();

		for (let i = 0; i < 4; i++) {
			await fs.writeFile(path.resolve(testPath, String(i)), '');
		}

		const nextOutput = await getNextOutputPath(testPath);
		expect(nextOutput).toBe(path.resolve(testPath, '4'));
	});

	it('will succesfully return 1 from a folder named 0', async () => {
		const testPath = await createTemporaryDirectory();

		// Create a folder named 0
		await fs.mkdir(path.resolve(testPath, '0'));

		const nextOutput = await getNextOutputPath(testPath);
		expect(nextOutput).toBe(path.resolve(testPath, '1'));
	});

	it('will return 11, from a single file named 10', async () => {
		const testPath = await createTemporaryDirectory();

		// Create a file named 10
		await fs.writeFile(path.resolve(testPath, '10'), '');

		const nextOutput = await getNextOutputPath(testPath);
		expect(nextOutput).toBe(path.resolve(testPath, '11'));
	});
});
