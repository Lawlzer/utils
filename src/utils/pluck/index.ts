/**
 * Takes an array of objects
 *
 * and returns an array of the values, of a given property.
 *
 * e.g: pluck([{ a: 1}, {a: 2}], 'a') => [1, 2]
 */

export function pluck<T extends Record<K, unknown>, K extends keyof T>(array: T[], key: K): T[K][] {
	return array.map((o) => o[key]);
}
