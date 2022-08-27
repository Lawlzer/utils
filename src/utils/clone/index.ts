/**
 * DATEs are not yet supported
 * Regular Expressions are not yet supported
 * Functions are not yet supported
 */
export function clone<T>(object: T): T {
	throw new Error('@lawlzer/helpers - clone - this function is not yet implemented.');
	return JSON.parse(JSON.stringify(object));
}
