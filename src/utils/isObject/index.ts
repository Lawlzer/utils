/**
 * Determine if a given input is an object. (object && !== null)
 */
export function isObject(input: unknown): input is object {
	return typeof input === 'object' && input !== null;
}
