import { assertType } from '../assertType/index';
import { throwError } from '../throwError/index';

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value The number to clamp
 * @param min The minimum allowed value
 * @param max The maximum allowed value
 * @returns The clamped value
 * @throws Error if min > max
 *
 * @example
 * clamp(5, 0, 10);  // 5 (within range)
 * clamp(-5, 0, 10); // 0 (below minimum)
 * clamp(15, 0, 10); // 10 (above maximum)
 * clamp(7, 7, 7);   // 7 (min equals max)
 */
export function clamp(value: number, min: number, max: number): number {
	assertType({ value }, 'number');
	assertType({ min }, 'number');
	assertType({ max }, 'number');

	if (min > max) {
		throwError(`clamp: min (${min}) cannot be greater than max (${max})`);
	}

	return Math.min(Math.max(value, min), max);
}
