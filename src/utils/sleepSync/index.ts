/**
 * Synchronous sleep function with microsecond precision.
 * This is a FULLY BLOCKING function! This should NOT be used in production.
 *
 * Uses a busy-wait loop with performance.now() for high precision timing.
 * Much more consistent than regular sleep - at 0.01ms precision it's only about 9% off
 * of expected time, whereas setTimeout-based sleep is typically 2-5ms off minimum.
 *
 * @param milliseconds - The number of milliseconds to sleep
 */
export function sleepSync(milliseconds: number): void {
	if (typeof milliseconds !== 'number' || isNaN(milliseconds) || milliseconds < 0) {
		throw new Error(`Invalid time value: ${milliseconds}. Expected a positive number.`);
	}

	const startTime = performance.now();
	const targetTime = startTime + milliseconds;

	while (performance.now() < targetTime) {
		// Busy-wait loop for precise timing
	}
}
