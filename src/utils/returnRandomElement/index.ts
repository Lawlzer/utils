import { throwError } from '../throwError';

/**
 * Return a random element from an array
 */
export function returnRandomElement<T extends Record<K, unknown>, K extends keyof T>(array: readonly T[]): T {
	if (!Array.isArray(array)) throwError(`Array must be an array. Array: ${JSON.stringify(array, null, 2)}`);
	return array[Math.floor(Math.random() * array.length)];
}
