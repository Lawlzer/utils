import fs from 'fs-extra';
import path from 'path';

/**
 * Recursively get every file in a directory
 */
export async function getAllFiles(pathToFolder: string, excludeDirs: string[] = []): Promise<string[]> {
	const allFiles = await fs.readdir(pathToFolder);
	const output = await Promise.all(
		allFiles.map(async (file) => {
			const filePath = path.join(pathToFolder, file);
			const isDirectory = (await fs.lstat(filePath)).isDirectory();
			if (isDirectory) {
				if (excludeDirs.includes(file)) {
					return []; // Skip this directory
				}
				return getAllFiles(filePath, excludeDirs);
			}
			return filePath;
		})
	);
	return output.flat(1);
}
