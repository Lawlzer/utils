import logger from 'node-color-log';

import { createError, throwError } from '~/utils/throwError';
import { AllTypesUnion } from '~/utils/types';

interface KeyValuePair {
	[key: string]: unknown;
}
type AllowedTypes = 'string' | 'number' | 'boolean' | 'object';

/**
 * Input should be a deconstructed string, aka:
 *
 * const value = 'hi'; assert({ hi }).
 *
 * It's Node Black Magic.
 */

// This was a lot of work, just to have a pretty error message...
export function assertType<I extends KeyValuePair>(variable: I, expectedType: AllowedTypes) {
	let text = Object.keys(variable);
	const key = text[0];
	if (text.length !== 1) throwError(`You can only assert one value at a time. You passed in ${text.length} values. Variable name: ${text.join(', ')}`);
	const value = variable[key];

	const isCorrectType = expectedType === typeof value;
	if (isCorrectType) return;

	const { stackTrace, functionName, fileName } = createError(true);

	logger.color('red').bold().log('\n\n@lawlzer/helpers - assertType');
	logger.log('You called the @lawlzer/helpers function: ').joint().color('blue').log(functionName);
	logger.log('Function called from your file: ').joint().color('blue').log(fileName);

	console.log(); // newline
	logger.log('Variable name: ').joint().color('green').log(key);
	logger.log('Variable value: ').joint().color('cyan').log(value);
	logger
		.log('Variable type: ')
		.joint()
		.color('magenta')
		.log(typeof value);

	logger.log('Expected type: ').joint().color('magenta').log(expectedType);

	console.log(); // newline
	logger.log('Stack trace: ', stackTrace);
	throw '';
}
