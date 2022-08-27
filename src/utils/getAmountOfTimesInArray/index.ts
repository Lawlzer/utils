/**
 * Returns how often a value occurs in an array.
 *
 * DOES NOT WORK for nested objects, or nested arrays.
 */

export function getAmountOfTimesInArray<T>(array: T[], itemToFind: T): number {
	return array.filter((item) => item === itemToFind).length;
}
