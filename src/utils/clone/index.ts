import { objectMap } from '../objectMap';

/**
 * Deep clones a value, creating a new instance with the same data.
 *
 * Supported types:
 * - Primitives (string, number, boolean, null, undefined, bigint, symbol)
 * - Arrays (including nested)
 * - Plain objects (including nested)
 * - Date objects
 * - RegExp objects
 *
 * NOT supported:
 * - Functions
 * - WeakMap, WeakSet
 * - DOM elements
 * - Class instances (will be treated as plain objects)
 *
 * @param input The value to clone
 * @returns A deep clone of the input
 *
 * @example
 * const original = { a: 1, b: { c: 2 }, d: [3, 4] };
 * const cloned = clone(original);
 * cloned.b.c = 99;
 * console.log(original.b.c); // Still 2
 *
 * @example
 * const date = new Date('2023-01-01');
 * const clonedDate = clone(date);
 * clonedDate.setFullYear(2024);
 * console.log(date.getFullYear()); // Still 2023
 */
export function clone<T>(input: T): T {
	// Handle primitives and null
	if (input === null || typeof input !== 'object') {
		return input;
	}

	// Handle Date
	if (input instanceof Date) {
		return new Date(input.getTime()) as T;
	}

	// Handle RegExp
	if (input instanceof RegExp) {
		const { flags } = input;
		return new RegExp(input.source, flags) as T;
	}

	// Handle Array
	if (Array.isArray(input)) {
		return input.map((item) => clone(item as unknown)) as T;
	}

	// Handle plain objects
	const output = objectMap(input as Record<string, unknown>, (value) => clone(value));

	return output as T;
}
