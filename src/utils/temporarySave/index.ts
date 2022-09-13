import fs from 'fs-extra';
import ms from 'ms';
import os from 'os';
import path from 'path';

import { assertType } from '~/utils/assertType';
import { getRandomCharacters } from '~/utils/getRandomCharacters';

/**
 * Save data to a temporary file
 *
 * Will be saved to the OS temporary folder.
 *
 * @returns an absolute path to the file location
 */
export async function temporarySave(data: string) {
	assertType({ data }, 'string');

	const tempFilePath = os.tmpdir();

	const fileName = getRandomCharacters(100, { upperCase: true, lowerCase: true });

	const filePath = path.join(tempFilePath, `LawlzerTemp_${fileName}`); // Generate a random file name that includes the date to delete it at

	await fs.writeFile(filePath, data);

	return filePath;
}
