import fs from 'fs-extra';

import { findPackageJsonPathFromInside } from '../../dev-utils/findPackageJson';

// We want to cache the package name, so we don't readJsonSync multiple times (since it's sync).
const packageNames: { [key: string]: string } = {};
function getPackageName(filePath: string): string {
	if (packageNames[filePath]) return packageNames[filePath];

	const packageJsonPath = findPackageJsonPathFromInside(filePath);
	if (!packageJsonPath) return 'unknown package name';

	const packageJson = fs.readJsonSync(packageJsonPath);
	packageNames[filePath] = packageJson.name;
	return packageJson.name;
}

/**
 * Will create an error, and return data about the error.
 *
 * @param removeRecentFunction Remove any references to the most recent function called (used if you want an assert function, but don't want to show references to that assertion function)
 */
export function createError(removeRecentFunction = false) {
	const errorStack = new Error().stack;
	if (!errorStack) throw '@lawlzer/utils - throwError - error.stack is undefined... We errored, in the throwError function. Wow. Here is your error, however: ' + errorStack;

	let errorArray = errorStack.split('\n');

	const callerFunction = errorArray[2].trim().split(' ')[1];

	errorArray.splice(1, 1); // remove references to createError

	if (removeRecentFunction) errorArray = errorArray.filter((line: string) => !line.includes(`at ${callerFunction}`)); // Remove references to the most recent function called

	// Get the package.json of the file that called this function -> the package name
	const lineThreeSplit = errorArray[1].trim().split(' ');
	const filePath: string | undefined = lineThreeSplit[lineThreeSplit.length - 1].replace('(', '').replace(')', '');
	const packageName = filePath ? getPackageName(filePath) : 'unknown package path';

	let functionName = errorArray[1].trim().split(' ')[1];
	if (functionName === 'Object.<anonymous>') functionName += ' (this is an anonymous function)';
	return {
		packageName: packageName,
		stackTrace: errorArray.join('\n'),
		functionName: functionName,
		filePath: filePath,
	};
}
