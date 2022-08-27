/**
 * Will sort an array of objects by the given property name.
 *
 * Sorts in place, but also returns the sorted array.
 */

export function multiSort<T>(arr: T[], ...keys: string[]) {
	return arr.sort((a, b) => {
		for (const key of keys) {
			if (a[key as keyof typeof a] < b[key as keyof typeof b]) return -1;
			if (a[key as keyof typeof a] > b[key as keyof typeof b]) return 1;
		}
		return 0;
	});
}
