import { throwError } from '../throwError';

/**
 * Returns how often a value occurs in an array.
 *
 * DOES NOT WORK for nested objects, or nested arrays.
 */

export function getAmountOfTimesInArray<T>(array: T[], itemToFind: T): number {
	if (!Array.isArray(array)) throwError(`@lawlzer/helpers - getAmountOfTimesInArray - The input is not an array. array: ${array}.  \nitemToFind: ${itemToFind}`);
	return array.filter((item) => item === itemToFind).length;
}
