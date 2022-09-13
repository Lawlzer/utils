import fs from 'fs-extra';
import ms from 'ms';
import logger from 'node-color-log';
import os from 'os';
import path from 'path';

import { createError } from '~/utils/createError';
import { getRandomCharacters } from '~/utils/getRandomCharacters';
import { AllTypesUnion } from '~/utils/types';

import { findPackageJsonPathFromInside } from '../../dev-utils/findPackageJson';

/**
 * Will throw an error that logs the file, function name, and error message.
 */
export function throwError(...message: string[]): never {
	const { packageName, stackTrace, functionName, filePath } = createError(true);
	stackTrace.split('\n').splice(1, 5); // Remove these lines, as they are for createError()
	logger.color('red').bold().log(`\n\n${packageName} - throwError`);
	logger.log('Function called: ').joint().color('blue').log(functionName);
	logger.log('Function called from your file: ').joint().color('blue').log(filePath);

	logger.log('You made the mistake: ').joint().color('magenta').log(message.join(' '));
	console.log(); // newline
	logger.log('Stack trace: ', stackTrace);

	throw '';
}
