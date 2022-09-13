import fs from 'fs-extra';
import ms from 'ms';
import logger from 'node-color-log';
import os from 'os';
import path from 'path';

import { getRandomCharacters } from '~/utils/getRandomCharacters';
import { AllTypesUnion } from '~/utils/types';

import { findPackageJsonPathFromInside } from '../../dev-utils/findPackageJson';

/**
 * Will create an error, and return data about the error.
 *
 * @param removeRecentFunction Remove any references to the most recent function called (used if you want an assert function, but don't want to show references to that assertion function)
 */
export function createError(removeRecentFunction = false) {
	const errorStack = new Error().stack;
	if (!errorStack) throw '@lawlzer/helpers - throwError - error.stack is undefined... We errored, in the throwError function. Wow. Here is your error, however: ' + errorStack;

	let errorArray = errorStack.split('\n');

	const callerFunction = errorArray[2].trim().split(' ')[1];

	errorArray.splice(1, 1); // remove references to createError

	if (removeRecentFunction) errorArray = errorArray.filter((line: string) => !line.includes(`at ${callerFunction}`)); // Remove references to the most recent function called

	// Get the packageJson of the file that called this function -> package name.
	const lineThreeSplit = errorArray[2].trim().split(' ');
	const filePath: string | undefined = lineThreeSplit[lineThreeSplit.length - 1].replace('(', '').replace(')', '');
	const packageName = filePath ? getPackageName(filePath) : 'unknown package path';

	const functionName = errorArray[1].trim().split(' ')[1];

	return {
		packageName: packageName,
		stackTrace: errorArray.join('\n'),
		functionName: functionName,
		filePath: filePath,
	};
}

function getPackageName(filePath: string) {
	const packageJsonPath = findPackageJsonPathFromInside(filePath);
	if (!packageJsonPath) return 'unknown package - no package.json found';
	const packageJson = fs.readJsonSync(packageJsonPath);
	return packageJson.name;
}

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
