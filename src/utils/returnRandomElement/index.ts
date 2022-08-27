/**
 * Return a random element from an array
 */
export function returnRandomElement<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T {
	if (!Array.isArray(array)) throw new Error(`@lawlzer/helpers - returnRandomElement: array must be an array. array: ${array}`);
	return array[Math.floor(Math.random() * array.length)] as T;
}
