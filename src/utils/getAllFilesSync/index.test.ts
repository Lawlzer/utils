import path from 'path';

import { getAllFilesSync } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will get all files from a path', async () => {
		const files = getAllFilesSync(__dirname);
		expect(files.length).toBeGreaterThan(0);
	});

	it('it will work for nested paths', async () => {
		const files = getAllFilesSync(path.resolve(__dirname, '../../'));
		expect(files.length).toBeGreaterThan(0);
	});

	it('will crash if given an invalid path', async () => {
		try {
			getAllFilesSync('invalid path');
			expect(true).toBe(false); // getAllFilesSync should have crashed.
		} catch (_e) {
			expect(true).toBe(true);
		}
	});
});
