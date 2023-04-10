import pc from 'picocolors';

import { createError } from '../createError';
import { throwError } from '../throwError';

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
	const text = Object.keys(variable);
	const key = text[0];
	if (text.length !== 1) throwError(`You can only assert one value at a time. You passed in ${text.length} values. Variable name: ${text.join(', ')}`);
	const value = variable[key];

	const isCorrectType = expectedType === typeof value;
	if (isCorrectType) return;

	const { stackTrace, functionName, filePath, packageName } = createError(true);

	let output = '';

	output += `\n ${pc.white(pc.bold(packageName))}`;
	output += `\n ${pc.white(`Function called from the file: ${pc.red(filePath)}`)}`;
	output += `\n ${pc.white(`Function called: ${pc.yellow(functionName)}`)}`;
	output += `\n ${pc.white(`Variable name: ${pc.green(key)}`)}`;
	output += `\n ${pc.white(`Variable value: ${pc.blue(String(value))}`)}`;
	output += `\n ${pc.white(`Variable type: ${pc.cyan(typeof value)}`)}`;
	output += `\n ${pc.white(`Expected type: ${pc.magenta(expectedType)}`)}`;
	output += `\n\n' ${pc.gray(stackTrace)}`;
	output += `\n\n' ${pc.gray('This error was thrown by the assertType() function from @lawlzer/utils.')}`;

	throw output;
}
