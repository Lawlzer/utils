import { throwError } from '../throwError';
import { sleep as defaultSleep } from '../sleep';

const RETRY_DELAY_MS = 10; // Standard delay between retries

/**
 * Retries a function until it succeeds or a timeout is reached.
 * Each attempt (including the first) gets its own slot within the total timeout.
 * If a function call exceeds its allocated time slot, it's considered a failed attempt for that slot.
 * @param timeoutMs Total timeout in milliseconds.
 * @param fn The function to retry. Must be a function that returns a Promise.
 * @param sleepFn Optional sleep function to use.
 * @returns A Promise that resolves with the result of the function if it succeeds, or rejects if the timeout is exceeded.
 */
export async function retry<T>(
	timeoutMs: number, // Reverted name to match original logic for clarity during restoration
	fn: () => Promise<T>,
	sleepFn: (duration: number) => Promise<void> = defaultSleep
): Promise<T> {
	const startTime = Date.now();

	while (true) {
		const elapsedTime = Date.now() - startTime;
		if (elapsedTime >= timeoutMs) {
			throwError(`Timeout of ${timeoutMs}ms exceeded (loop start)`);
		}

		try {
			const remainingTimeInSlot = timeoutMs - elapsedTime;
			if (remainingTimeInSlot <= 0) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (no time left for attempt)`);
			}

			const timeoutSignalPromise = new Promise<T>((_, reject) => {
				sleepFn(remainingTimeInSlot) // Use injected sleepFn
					.then(() => {
						reject(new Error('fn_internal_timeout_signal'));
					})
					.catch(reject);
			});

			const result = await Promise.race([fn(), timeoutSignalPromise]);
			return result as T;
		} catch (e: any) {
			if (e && e.message === 'fn_internal_timeout_signal') {
				// fn() was too slow for the remainingTimeInSlot. The main loop's initial check will handle this,
				// or more directly, throw timeout as we know fn() didn't complete in its allocated slice.
				throwError(`Timeout of ${timeoutMs}ms exceeded (function call timed out within its slot)`);
			}

			// Check if overall timeout has been exceeded AFTER the error from fn()
			if (Date.now() - startTime >= timeoutMs) {
				throwError(`Timeout of ${timeoutMs}ms exceeded (after function error: ${e.message ?? e}, no time left)`);
			}

			// If fn() threw a legitimate error (not our internal signal) and there's still time overall.
			// Check if there's time for a delay AND a subsequent attempt (even if brief)
			if (Date.now() - startTime + RETRY_DELAY_MS < timeoutMs) {
				await sleepFn(RETRY_DELAY_MS); // Use injected sleepFn
			} else {
				// Not enough time for a meaningful retry after delay.
				throwError(`Timeout of ${timeoutMs}ms exceeded (insufficient time for retry after error: ${e.message ?? e})`);
			}
			// Continue to the next iteration of the while loop to retry fn()
		}
	}
}
