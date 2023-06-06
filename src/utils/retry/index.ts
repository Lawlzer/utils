import { sleep } from '../sleep';
import { throwError } from '../throwError';

/**
 * Continously retry a function until it succeeds, or the timeout is exceeded.
 */
export async function retry<T>(timeoutMs: number, fn: () => Promise<T>) {
	/*
	 * The naive way to do this is to do a while(now - start < timeout) func();
	 * However, if the function takes 5000ms to error, and we give it a 1000ms timeout, it will take 5000ms to error.
	 * We use a Promise.race to instantly error after the timeout, instead of waiting for the function to resolve.
	 * HOWEVER, this means that the function will continue to run in the background! (As I do not believe it's possible to exit() the function)
	 */

	return Promise.race([
		// Instantly error if the timeout is exceeded
		(async () => {
			await sleep(timeoutMs);
			throwError(`Timeout of ${timeoutMs}ms exceeded`);
		})(),

		// Run the function itself, until it suceeds (or the timeout is exceeded)
		(async () => {
			const startTime = Date.now();

			while (Date.now() - startTime < timeoutMs) {
				try {
					const result = await fn();

					return result;
				} catch (e) {}
				await sleep(10);
			}
			throwError(`Timeout of ${timeoutMs}ms exceeded`);
		})(),
	]) as T; // It will error if we do not return <T>
}
