import fs from 'fs-extra';
import path, { extname } from 'path';

/**
 * If the path provided does not have an extension, it will create a directory.
 *
 * If the path provided has an extension, it will be created as a file.
 */

export async function ensureExists(path: string, initialFileContent = '') {
	// Handle directories
	const extension = extname(path);
	if (!extension) {
		return await fs.mkdir(path, { recursive: true });
	}

	const fileExists = await fs.pathExists(path);
	if (fileExists) return;

	await fs.writeFile(path, initialFileContent);
}
