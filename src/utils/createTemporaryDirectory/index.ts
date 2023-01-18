import fs from 'fs-extra';
import os from 'os';
import path from 'path';

import { getRandomCharacters } from '../getRandomCharacters';

/**
 * Make sure we get a clean (empty) directory
 */
export async function createTemporaryDirectory(): Promise<string> {
	const testPath = path.join(os.tmpdir(), getRandomCharacters(50, { letters: true, symbols: false }));
	// Delete the folder (if it exists)
	await fs.remove(testPath);

	// Create a testing folder
	await fs.mkdir(testPath);

	return testPath;
}
