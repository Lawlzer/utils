/**
 * This is a FULLY BLOCKING function! This should NOT be used in production.
 *
 * If you want to simply wait, use sleep() instead.
 */
import util from 'util';

export function blockF(timeout: number) {
	const start = Date.now();

	while (Date.now() - start < timeout) {}
}

// Define the deprecated block function using util.deprecate
export const block = util.deprecate(blockF, '@lawlzer/utils "block()" function has been renamed to "sleepSync".');
