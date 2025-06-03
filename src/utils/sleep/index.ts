import ms from 'ms';

import { throwError } from '../throwError';

export async function sleep(inputTime: number | string): Promise<void> {
	let numericTimeValue: number | undefined;

	if (typeof inputTime === 'number') {
		numericTimeValue = inputTime;
	} else if (typeof inputTime === 'string') {
		// The ms library can convert a string to a number of milliseconds.
		// @types/ms is strict and expects a StringValue, but ms runtime often handles general strings.
		// We expect ms(string) to return number | undefined.
		// @ts-expect-error TS complains about string vs StringValue here, but runtime is flexible.
		const parsedMilliseconds = ms(inputTime);
		if (typeof parsedMilliseconds === 'number') {
			numericTimeValue = parsedMilliseconds;
		}
		// If parsedMilliseconds is not a number (i.e., undefined),
		// numericTimeValue will remain undefined for string inputs that don't parse,
		// and the check below will catch it.
	}

	if (typeof numericTimeValue !== 'number' || isNaN(numericTimeValue)) {
		throwError(`Invalid time value provided: \"${String(inputTime)}\". Expected a number or a parsable time string (e.g., "10s", "2m").`);
	}

	// At this point, numericTimeValue is confirmed to be a valid number.
	const millisecondsToSleep: number = numericTimeValue;

	// Get '1d' in milliseconds. ms('1d') should return a number.
	const oneDayInMs = ms('1d');
	if (typeof oneDayInMs === 'number' && millisecondsToSleep >= oneDayInMs) {
		console.warn(`@lawlzer/utils: sleep() has been called for 1d or longer with input: \"${String(inputTime)}\".`);
	}

	return new Promise((resolve) => {
		setTimeout(resolve, millisecondsToSleep);
	});
}
