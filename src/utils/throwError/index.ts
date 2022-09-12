import fs from 'fs-extra';
import ms from 'ms';
import logger from 'node-color-log';
import os from 'os';
import path from 'path';

import { getRandomCharacters } from '~/utils/getRandomCharacters';

/**
 * Will throw an error that logs the file, function name, and error message.
 */
export function throwError(...data: string[]) {
	const errorStack = new Error().stack;
	if (!errorStack) throw '@lawlzer/helpers - throwError - error.stack is undefined... We errored, in the throwError function. Wow. Here is your error, however: ' + errorStack;

	const errorArray = errorStack.split('\n');
	const functionCalled = errorArray[2].trim().split(' ')[1];
	const fileCalled = errorArray?.[2]?.trim()?.split('(')?.[1]?.split(')')?.[0];
	errorArray.splice(1, 1); // Remove this line, as it shows the throwError function

	logger.color('red').bold().log('\n\n@lawlzer/helpers - throwError');
	logger.log('Function called: ').joint().color('blue').log(functionCalled);
	logger.log('Function called from your file: ').joint().color('blue').log(fileCalled);
	logger.log('You made the mistake: ').joint().color('magenta').log(data.join('\n'));
	logger.log('Stack trace: ', errorArray.join('\n'));

	throw '';
}
