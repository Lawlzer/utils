import fs from 'fs-extra';
import ms from 'ms';
import os from 'os';
import path from 'path';
import pc from 'picocolors';

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
	output += '\n' + pc.red(pc.bold(packageName));
	output += '\n' + pc.white(`Function called from the file: ${pc.blue(filePath)}`);
	output += '\n' + pc.white(`Function called: ${pc.cyan(functionName)}`);
	output += '\n' + pc.white(`You made the mistake: ${pc.magenta(message.join(' '))}`);
	output += '\n\n' + pc.gray(stackTrace);
	output += '\n\n' + pc.gray('This error was thrown by the throwError() function from @lawlzer/helpers.');

	throw output;
}
