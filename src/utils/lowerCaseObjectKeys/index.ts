/**
 * Recursively turn every key in a JSON object to lowercase
 */

import type { UnknownObject } from '../types';

export function lowerCaseObjectKeys(input: UnknownObject | UnknownObject[]): UnknownObject | UnknownObject[] {
	if (typeof input !== 'object') return input;
	const output: Record<string, unknown> = {};

	// Arrays
	if (Array.isArray(input)) {
		const result = input.map((item) => lowerCaseObjectKeys(item)).flat(99);
		return result;
	}

	// Objects
	for (const key in input) {
		// I'm too bad with TypeScript to figure out why it doesn't work without the as :/
		output[key.toLowerCase()] = lowerCaseObjectKeys(input[key] as UnknownObject);
	}
	return output;
}
