/**
 * Returns all unique elements in an array.
 * For primitive values, uses Set for O(n) performance.
 * For objects, uses deep comparison with O(n²) performance.
 *
 * @param input The array to get unique values from
 * @returns Array containing only unique values
 *
 * @example
 * // With primitive values
 * getUniques([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
 *
 * @example
 * // With objects
 * getUniques([{a: 1}, {a: 1}, {a: 2}]); // [{a: 1}, {a: 2}]
 *
 * @example
 * // Mixed types
 * getUniques(['a', 'b', 'a', null, null]); // ['a', 'b', null]
 */

import { deepCompare } from '../deepCompare';

export function getUniques<T>(input: readonly T[]): T[] {
	if (input.length === 0) return [];

	// Fast path for primitive values
	const firstItem = input[0];
	const isPrimitive = firstItem === null || firstItem === undefined || typeof firstItem !== 'object';

	if (isPrimitive) {
		// Use Set for O(n) performance with primitives
		return Array.from(new Set(input));
	}

	// Slower path for objects using deep comparison
	const output: T[] = [];
	for (const item of input) {
		if (!output.some((x) => deepCompare(x, item))) {
			output.push(item);
		}
	}
	return output;
}
