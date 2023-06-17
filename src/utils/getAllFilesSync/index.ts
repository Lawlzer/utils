import fs from 'fs-extra';
import path from 'path';

/**
 * Recursively get every file in a directory
 *
 * This one is ran synchronously, so it should only be ran on startup.
 */
export function getAllFilesSync(pathToFolder: string): string[] {
	const allFiles = fs.readdirSync(pathToFolder);
	const output = allFiles.map((file) => {
		const filePath = path.join(pathToFolder, file);
		const isDirectory = fs.lstatSync(filePath).isDirectory();
		if (isDirectory) return getAllFilesSync(filePath);
		return filePath;
	});
	return output.flat(1);
}
