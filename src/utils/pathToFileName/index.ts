import fs from 'fs-extra';
import path, { extname } from 'path';

import { assertType } from '~/utils/assertType';
import { throwError } from '~/utils/throwError/index';

/**
 * If the path provided does not have an extension, it will create a directory.
 *
 * If the path provided has an extension, it will be created as a file.
 */

export function pathToFileName(path: string): string {
	assertType({ path }, 'string');
	const fileName = path.replaceAll('\\', '/').split('/').pop();

	// This error will only be thrown if we are passed in a single slash
	if (!fileName) throwError('fileName passed in turned into undefined. Path: ', path);

	return fileName;
}
