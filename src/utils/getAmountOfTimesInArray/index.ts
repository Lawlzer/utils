import { throwError } from '../throwError';

/**
 * Returns how often a value occurs in an array.
 *
 * DOES NOT WORK for nested objects, or nested arrays.
 */

export function getAmountOfTimesInArray<T>(array: readonly T[], itemToFind: T): number {
	if (!Array.isArray(array)) throwError(`@lawlzer/utils - getAmountOfTimesInArray - The input is not an array. array: ${JSON.stringify(array, null, 2)}.  \nitemToFind: ${JSON.stringify(itemToFind, null, 2)}`);
	return array.filter((item) => item === itemToFind).length;
}
