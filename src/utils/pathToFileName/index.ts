import fs from 'fs-extra';
import path, { extname } from 'path';

import { throwError } from '~/utils/throwError/index';

/**
 * If the path provided does not have an extension, it will create a directory.
 *
 * If the path provided has an extension, it will be created as a file.
 */

export async function pathToFileName(path: string): Promise<string> {
	const fileName = path.replaceAll('\\', '/').split('/').pop();
	if (!fileName) throwError('fileName passed in turned into undefined. Path: ', path);

	return fileName;
}
