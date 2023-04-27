import { throwError } from '../throwError';

/**
 * Return a random element from an array
 */
export function returnRandomElement<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T {
	if (!Array.isArray(array)) throwError(`Array must be an array. Array: ${array}`);
	return array[Math.floor(Math.random() * array.length)] ;
}
