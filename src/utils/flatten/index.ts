import { throwError } from '../throwError';
import type { UnknownObject } from '../types/index';

/**
 * Will not modify the initial object
 *
 * DOES NOT currently handle arrays.
 */

export function flattenObject(input: unknown, separator = '-', output?: UnknownObject, currentPath?: string) {
	if (!output) output = {};
	if (!currentPath) currentPath = '';

	// Handle Arrays (Arrays work normally OK, but nested objects inside of arrays would be a problem)
	if (Array.isArray(input)) throwError('@lawlzer/helpers - flattenObject - Arrays are not supported.');
	// let outputArray: unknown[] = [];
	// for (const currentItem of input) {
	// 	const newPath = `${currentPath}${separator}${outputArray.length}`;  // This uses the array index as the key... which is kinda weird...
	// 	outputArray[outputArray.length] = await flattenObject(currentItem, separator, output, newPath);
	// }
	// output[currentPath] = outputArray;
	// return output;

	// Handle objects
	if (typeof input === 'object' && input !== null) {
		for (const key of Object.keys(input)) {
			const value = input[key as keyof typeof input];
			const newPath = `${currentPath}${separator}${key}`;
			flattenObject(value, separator, output, newPath);
		}
		return output;
	}

	currentPath = currentPath.replace(separator, ''); // The currentPath starts with the separator, so we need to remove it.
	output[currentPath] = input;
	return output;
}

/**
 * Will take a flattened object, and unflatten it.
 */

export function unflattenObject<T extends object>(input: T, separator = '-') {
	const output: UnknownObject = {};
	for (const [key, value] of Object.entries(input)) {
		// Build the "parts" ("a.b.c" => ["a", "b", "c"]) to re-build the object
		const parts = key.split(separator);

		// For each part, we need to "build" the object structure
		let current = output; // The current "object" (parts) we are looking at
		for (let index = 0; index < parts.length; index++) {
			const part = parts[index];
			if (!current[part]) current[part] = {}; // Make sure we don't override when looping over parts we've already started
			if (index === parts.length - 1) {
				current[part] = value;
				continue;
			}
			// @ts-expect-error I should fix this sometime...
			// We set current to output, so TypeScript thinks it's a one-level object. However, it's not.
			current = current[part];
		}
	}
	return output;
}
