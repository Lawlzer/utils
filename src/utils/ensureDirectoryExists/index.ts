import fs from 'fs-extra';

import { getDirectory } from '../getDirectory';

/**
 * Ensure a given directory exists. It will be created if it does not exist.
 *
 * If a file extension is provided (path/to/file.txt), it will remove the file (path/to), and then create the directory.
 */
export async function ensureDirectoryExists(path: string) {
	const directory = getDirectory(path);

	await fs.ensureDir(directory);
}
