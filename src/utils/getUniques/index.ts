/**
 * Will return any unique elements in an array
 *
 * Handles objects as well
 */

import { deepCompare } from '../deepCompare';

export function getUniques<T>(input: T[]): T[] {
	const output: T[] = [];
	for (const item of input) {
		if (output.some((x) => deepCompare(x, item))) continue;
		output.push(item);
	}
	return output;
}
