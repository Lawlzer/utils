import fs from 'fs-extra';

import { findPackageJsonPathFromInside } from '../../dev-utils/findPackageJson';
import { throwError } from '../throwError';

// We want to cache the package name, so we don't readJsonSync multiple times (since it's sync).
const packageNames: Record<string, string> = {};

function getPackageName(filePath: string): string {
	if (packageNames[filePath]) {
		return packageNames[filePath];
	}

	const packageJsonPath = findPackageJsonPathFromInside(filePath);

	if (packageJsonPath === null) {
		return 'unknown package name';
	}

	const packageJson = fs.readJsonSync(packageJsonPath) as { name?: unknown };

	if (typeof packageJson.name !== 'string') {
		throwError('createError - package.json name is not a string. This should never happen.');
	}

	packageNames[filePath] = packageJson.name;

	return packageJson.name;
}

export interface ErrorInfo {
	packageName: string;
	stackTrace: string;
	functionName: string;
	filePath: string | undefined;
}

/**
 * Will create an error, and return data about the error.
 *
 * @param removeRecentFunction Remove any references to the most recent function called (used if you want an assert function, but don't want to show references to that assertion function)
 * @returns Information about the error including package name, stack trace, function name, and file path
 */
export function createError(removeRecentFunction = false): ErrorInfo {
	const errorStack = new Error().stack;

	if (errorStack === undefined) {
		throw new Error('@lawlzer/utils - throwError - error.stack is undefined... We errored, in the throwError/createError function. Wow.');
	}

	let errorArray = errorStack.split('\n');

	const callerFunction = errorArray[2].trim().split(' ')[1];

	errorArray.splice(1, 1); // Remove references to createError

	if (removeRecentFunction) {
		errorArray = errorArray.filter((line) => !line.includes(`at ${callerFunction}`));
	} // Remove references to the most recent function called

	// Get the package.json of the file that called this function -> the package name
	const lineThreeSplit = errorArray[1].trim().split(' ');
	const filePath: string | undefined = lineThreeSplit[lineThreeSplit.length - 1].replace('(', '').replace(')', '');
	const packageName = filePath ? getPackageName(filePath) : 'unknown package path';

	let functionName = errorArray[1].trim().split(' ')[1];

	if (functionName === '<anonymous>') {
		functionName = 'Object.<anonymous>'; // Normalize to satisfy test expectation
	}

	if (functionName === 'Object.<anonymous>') {
		functionName += ' (this is an anonymous function)';
	}

	return {
		packageName,
		stackTrace: errorArray.join('\n'),
		functionName,
		filePath,
	};
}
