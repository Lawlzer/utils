import { objectMap } from '../objectMap';

/**
 * Supports nested arrays and objects.
 *
 * Does not support complex object types: Dates, RegExps, Functions, etc.
 */
export function clone<T>(input: T): T {
	const isArray = Array.isArray(input);
	if (isArray)
		return input.map((item) => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return clone(item);
		}) as T;

	const isObject = typeof input === 'object' && input !== null;
	if (isObject) {
		const output = objectMap(input as Record<string, unknown>, (value) => {
			return clone(value);
		});
		return output as T;
	}
	return input;
}
