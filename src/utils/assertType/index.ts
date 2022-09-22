import colors from '@colors/colors';

import { createError } from '~/utils/createError';
import { throwError } from '~/utils/throwError';
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

	const { stackTrace, functionName, filePath, packageName } = createError(true);

	let output = '';
	output += '\n' + colors.bold.red(packageName);
	output += '\n' + colors.white(`Function called from the file: ${colors.red(filePath)}`);
	output += '\n' + colors.white(`Function called: ${colors.yellow(functionName)}`);
	output += '\n' + colors.white(`Variable name: ${colors.green(key)}`);
	output += '\n' + colors.white(`Variable value: ${colors.blue(String(value))}`);
	output += '\n' + colors.white(`Variable type: ${colors.cyan(typeof value)}`);
	output += '\n' + colors.white(`Expected type: ${colors.magenta(expectedType)}`);
	output += '\n\n' + colors.gray(stackTrace);
	output += '\n\n' + colors.gray('This error was thrown by the assertType() function from @lawlzer/helpers.');

	throw output;
}
