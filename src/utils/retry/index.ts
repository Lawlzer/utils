import { sleep } from '../sleep';
import { throwError } from '../throwError';

/**
 * Continously retry a function until it succeeds, or the timeout is exceeded.
 */
export async function retry<T>(timeoutMs: number, fn: () => Promise<T>): Promise<T> {
	const startTime = Date.now();

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const elapsedTime = Date.now() - startTime;
		if (elapsedTime >= timeoutMs) {
			// If we've already used up all the time, throw the timeout error.
			throwError(`Timeout of ${timeoutMs}ms exceeded (loop start)`);
		}

		try {
			const remainingTime = timeoutMs - elapsedTime;
			if (remainingTime <= 0) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (no time left for attempt)`);
			}

			// Create a promise that rejects after remainingTime
			const timeoutSignalPromise = new Promise<T>((resolve, reject) => {
				sleep(remainingTime)
					.then(() => {
						reject(new Error('fn_internal_timeout_signal'));
					})
					.catch(reject); // Propagate any error from sleep itself, though unlikely
			});

			const result = await Promise.race([fn(), timeoutSignalPromise]);

			return result as T;
		} catch (e: any) {
			if (e && e.message === 'fn_internal_timeout_signal') {
				// fn() was too slow for the remainingTime. The main loop's initial check will handle this.
				// Or, more directly, throw timeout as we know fn() didn't complete in its allocated slice.
				throwError(`Timeout of ${timeoutMs}ms exceeded (function call timed out within its slot)`);
			}

			// Check if overall timeout has been exceeded AFTER the error from fn()
			if (Date.now() - startTime >= timeoutMs) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (after function error, no time left)`);
			}

			// If fn() threw a legitimate error (not our internal signal) and there's still time overall.
			const retryDelay = 10;
			// Check if there's time for a delay AND a subsequent attempt (even if brief)
			if (Date.now() - startTime + retryDelay < timeoutMs) {
				await sleep(retryDelay);
			} else {
				// Not enough time for a meaningful retry after delay.
				throwError(`Timeout of ${timeoutMs}ms exceeded (insufficient time for retry after error)`);
			}
			// Continue to the next iteration of the while loop to retry fn()
		}
	}
}
