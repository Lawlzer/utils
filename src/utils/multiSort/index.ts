/**
 * Will sort an array of objects by the given property name.
 *
 * Sorts in place, but also returns the sorted array.
 */

export function multiSort(arr: any[], ...keys: string[]) {
	return arr.sort((a, b) => {
		for (const key of keys) {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
		}
		return 0;
	});
}
