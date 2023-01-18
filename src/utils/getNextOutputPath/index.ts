import fs from 'fs-extra';
import path from 'path';

import { ensureDirectoryExists } from '../ensureDirectoryExists';
/**
 * Takes a PATH to a folder (will be created if it does not exist), and returns the "next" filename / foldername, incrementally
 *
 * [3, 4, 5, 6] -> 7
 *
 * [] -> 0
 *
 * This will return the <resolved> path to the output (from ROOT)
 *
 * This can be used for either files, or folders.
 */
export async function getNextOutputPath(iPath: string): Promise<string> {
	await ensureDirectoryExists(iPath);
	const allFolders = await fs.readdir(iPath);

	// Map over every folder, and return the highest number + 1
	const highest = allFolders.reduce((acc, curr) => {
		const currNum = parseInt(curr);
		if (currNum > acc) {
			return currNum;
		}

		return acc;
	}, -1);

	// Resolve the path
	return path.resolve(iPath, String(highest + 1));
}
