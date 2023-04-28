/**
 * Will sort an array of objects by the given property name.
 *
 * Sorts in place. DOES NOT return a new array.
 */

export function multiSort<T>(arr: T[], ...keys: readonly string[]) {
	arr.sort((a, b) => {
		for (const key of keys) {
			if (a[key as keyof typeof a] < b[key as keyof typeof b]) return -1;
			if (a[key as keyof typeof a] > b[key as keyof typeof b]) return 1;
		}
		return 0;
	});

	return void 0;
}
