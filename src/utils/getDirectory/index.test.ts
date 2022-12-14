import { getDirectory } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will remove the file from an extension path', () => {
		const path = 'path/to/file.txt';
		expect(getDirectory(path)).toBe('path/to');
	});

	it('will return the same path if there is no file extension', () => {
		const path = 'path/to';
		expect(getDirectory(path)).toBe('path/to');
	});
});
