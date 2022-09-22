import colors from '@colors/colors';
import fs from 'fs-extra';
import ms from 'ms';
import os from 'os';
import path from 'path';

import { findPackageJsonPathFromInside } from '~/dev-utils/findPackageJson';
import { createError } from '~/utils/createError';
import { getRandomCharacters } from '~/utils/getRandomCharacters';
import { AllTypesUnion } from '~/utils/types';

/**
 * Will throw an error that logs the file, function name, and error message.
 */
export function throwError(...message: string[]): never {
	const { packageName, stackTrace, functionName, filePath } = createError(true);
	stackTrace.split('\n').splice(1, 5); // Remove these lines, as they are for createError()

	let output = '';
	output += '\n' + colors.bold.red(packageName);
	output += '\n' + colors.white(`Function called from the file: ${colors.blue(filePath)}`);
	output += '\n' + colors.white(`Function called: ${colors.cyan(functionName)}`);
	output += '\n' + colors.white(`You made the mistake: ${colors.magenta(message.join(' '))}`);
	output += '\n\n' + colors.gray(stackTrace);
	output += '\n\n' + colors.gray('This error was thrown by the throwError() function from @lawlzer/helpers.');

	throw output;
}
