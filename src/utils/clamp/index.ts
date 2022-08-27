/**
 * Force a number to be between a min and max value.
 */

export function clamp(value: number, min: number, max: number) {
	if (typeof value !== 'number' || isNaN(value)) throw new Error(`@lawlzer/helpers - clamp - value is not a number. value: ${value}`);
	if (typeof min !== 'number' || isNaN(min)) throw new Error(`@lawlzer/helpers - clamp - min is not a number. min: ${min}`);
	if (typeof max !== 'number' || isNaN(max)) throw new Error(`@lawlzer/helpers - clamp - max is not a number. max: ${max}`);

	return Math.min(Math.max(value, min), max);
}
