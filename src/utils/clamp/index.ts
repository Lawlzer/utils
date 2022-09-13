import { assertType } from '~/utils/assertType/index';
/**
 * Force a number to be between a min and max value.
 */

export function clamp(value: number, min: number, max: number) {
	assertType({ value }, 'number');
	assertType({ min }, 'number');
	assertType({ max }, 'number');

	return Math.min(Math.max(value, min), max);
}
