import fs from 'fs-extra';
import ms from 'ms';
import logger from 'node-color-log';
import os from 'os';
import path from 'path';

import { getRandomCharacters } from '~/utils/getRandomCharacters';
import { AllTypesUnion } from '~/utils/types';

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

	const functionName = errorArray[1].trim().split(' ')[1];

	const fileCalled = errorArray?.[2]?.trim()?.split('(')?.[1]?.split(')')?.[0];
	return {
		stackTrace: errorArray.join('\n'),
		functionName: functionName,
		fileName: fileCalled,
	};
}

/**
 * Will throw an error that logs the file, function name, and error message.
 */
export function throwError(...message: string[]) {
	const { stackTrace, functionName, fileName } = createError(true);
	stackTrace.split('\n').splice(1, 5); // Remove these lines, as they are for createError()
	logger.color('red').bold().log('\n\n@lawlzer/helpers - throwError');
	logger.log('Function called: ').joint().color('blue').log(functionName);
	logger.log('Function called from your file: ').joint().color('blue').log(fileName);

	logger.log('You made the mistake: ').joint().color('magenta').log(message.join(' '));
	console.log(); // newline
	logger.log('Stack trace: ', stackTrace);
	throw '';
}
