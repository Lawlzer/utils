import { assertType } from '../assertType';
import { throwError } from '../throwError/index';

/**
 * Returns the file name from a path.
 */

export function pathToFileName(path: string): string {
	assertType({ path }, 'string');
	const fileName = path.replaceAll('\\', '/').split('/').pop();

	// This error will only be thrown if we are passed in a single slash
	if (fileName === undefined) throwError('fileName passed in turned into undefined. Path: ', path);

	return fileName;
}
