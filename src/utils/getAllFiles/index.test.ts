import path from 'path';

import { getAllFiles } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will get all files from a path', async () => {
		const files = await getAllFiles(__dirname);
		expect(files.length).toBeGreaterThan(0);
	});

	it('it will work for nested paths', async () => {
		const files = await getAllFiles(path.resolve(__dirname, '../../'));
		expect(files.length).toBeGreaterThan(0);
	});

	it('will crash if given an invalid path', async () => {
		await expect(getAllFiles('invalid path')).rejects.toThrowError();
	});
});
