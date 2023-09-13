/**
 * This is a FULLY BLOCKING function! This should NOT be used in production.
 *
 * If you want to simply wait, use sleep() instead.
 */
export function sleepSync(timeout: number) {
	const start = Date.now();

	while (Date.now() - start < timeout) {}
}
