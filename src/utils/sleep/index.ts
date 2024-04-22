import ms from 'ms';

import { throwError } from '../throwError';

export async function sleep(inputTime: number | string): Promise<void> {
	if (typeof inputTime !== 'number' && typeof inputTime !== 'string') throwError('inputTime must be a number or a string representing a number.');
	if (typeof inputTime === 'string') inputTime = ms(inputTime); // convert to ms if it's not already, this handles things like ('10s' or 10000)

	if (typeof inputTime !== 'number') throwError('inputTime must be a string that represents a number.');

	const myNumber = Number(inputTime);
	if (myNumber >= ms('1d')) console.warn(`@lawlzer/utils: sleep() has been called for 1d or longer.`);
	return new Promise((resolve) => setTimeout(resolve, myNumber));
}
