import fs from 'fs-extra';

import { createTemporaryDirectory } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return a path to a directory', async () => {
		const testPath = await createTemporaryDirectory();
		expect(testPath).toBeTruthy();

		// make sure it exists
		const exists = await fs.pathExists(testPath);
		expect(exists).toBeTruthy();
	});

	it('will return a different path each time', async () => {
		const testPath1 = await createTemporaryDirectory();
		const testPath2 = await createTemporaryDirectory();

		expect(testPath1).not.toBe(testPath2);
	});

	it('will return an empty directory', async () => {
		const testPath = await createTemporaryDirectory();

		const files = await fs.readdir(testPath);
		expect(files.length).toBe(0);
	});
});
