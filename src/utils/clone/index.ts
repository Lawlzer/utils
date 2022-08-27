import { objectMap } from '~/utils/objectMap';

/**
 * Supports nested arrays and objects.
 *
 * Does not support complex object types: Dates, RegExps, Functions, etc.
 */
export function clone<T>(input: T): T {
	const isArray = Array.isArray(input);
	if (isArray)
		return input.map((item) => {
			return clone(item);
		}) as any;

	const isObject = typeof input === 'object' && input !== null;
	if (isObject) {
		const output = objectMap(input as any, (value) => {
			return clone(value);
		});
		return output as any;
	}
	return input;
}
