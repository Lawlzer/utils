import fs from 'fs-extra';
import os from 'os';
import path from 'path';

import { assertType } from '../assertType/index';
import { getRandomCharacters } from '../getRandomCharacters/index';

/**
 * Save data to a temporary file
 *
 * Will be saved to the OS temporary folder. (Should not be relied on, as the OS may delete it at any time)
 *
 * @returns an absolute path to the file location
 */
export async function temporarySave(data: string) {
	assertType({ data }, 'string');

	const tempFilePath = os.tmpdir();

	const fileName = getRandomCharacters(100, { letters: true });

	const filePath = path.join(tempFilePath, `LawlzerTemp_${fileName}`); // Generate a random file name that includes the date to delete it at

	await fs.writeFile(filePath, data);

	return filePath;
}
