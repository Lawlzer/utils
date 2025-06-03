/**
 * Shuffles an array in-place using the Fisher-Yates algorithm.
 * WARNING: This modifies the original array!
 *
 * @param array The array to shuffle (will be modified)
 * @returns void - The array is modified in-place
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * shuffleArray(arr); // arr is now shuffled, e.g., [3, 1, 5, 2, 4]
 */
export function shuffleArray<T>(array: T[]): void {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Use destructuring for swap
	}
}

/**
 * Returns a new shuffled array without modifying the original.
 * Uses the Fisher-Yates algorithm.
 *
 * @param array The array to shuffle
 * @returns A new shuffled array
 *
 * @example
 * const original = [1, 2, 3, 4, 5];
 * const shuffled = shuffleArrayImmutable(original);
 * // original is still [1, 2, 3, 4, 5]
 * // shuffled is e.g., [3, 1, 5, 2, 4]
 */
export function shuffleArrayImmutable<T>(array: readonly T[]): T[] {
	const copy = [...array];
	shuffleArray(copy);
	return copy;
}
