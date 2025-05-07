import { throwError } from '../throwError';

/**
 * Return a random element from an array
 */
export function returnRandomElement<T>(array: readonly T[]): T | undefined {
	if (!Array.isArray(array)) throwError(`Array must be an array. Array: ${JSON.stringify(array, null, 2)}`);

	if (array.length === 0) return undefined;

	return array[Math.floor(Math.random() * array.length)] as T;
}
