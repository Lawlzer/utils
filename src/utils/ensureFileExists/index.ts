import fs from 'fs-extra';

import { ensureDirectoryExists } from '~/utils/ensureDirectoryExists';
import { getDirectory } from '~/utils/getDirectory';

/**
 * Ensure a given file exists. It will be created if it does not exist.
 */
export async function ensureFileExists(path: string, initialFileContent = '') {
	const directory = getDirectory(path);
	await ensureDirectoryExists(directory);

	const fileExists = await fs.pathExists(path);
	if (!fileExists) await fs.writeFile(path, initialFileContent);
}
