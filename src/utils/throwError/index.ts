import pc from 'picocolors';

import { createError } from '../createError/index';

/**
 * Will throw an error that logs the file, function name, and error message.
 */
export function throwError(...message: readonly string[]): never {
	const { packageName, stackTrace, functionName, filePath } = createError(true);
	stackTrace.split('\n').splice(1, 5); // Remove these lines, as they are for createError()

	let output = '';
	output += `\n${pc.red(pc.bold(packageName))}`;
	output += `\n${pc.white(`Function called from the file: ${pc.blue(filePath)}`)}`;
	output += `\n${pc.white(`Function called: ${pc.cyan(functionName)}`)}`;
	output += `\n${pc.white(`You made the mistake: ${pc.magenta(message.join(' '))}`)}`;
	output += `\n\n${pc.gray(stackTrace)}`;
	output += `\n\n${pc.gray('This error was thrown by the throwError() function from @lawlzer/utils.')}`;

	throw new Error(output);
}
