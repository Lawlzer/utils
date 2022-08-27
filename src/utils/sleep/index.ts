import ms from 'ms';

export async function sleep(inputTime: string | number): Promise<void> {
	if (typeof inputTime !== 'number' && typeof inputTime !== 'string') throw new Error('@lawlzer/helpers - sleep: inputTime must be a number or a string representing a number.');
	if (typeof inputTime === 'string') inputTime = ms(inputTime); // convert to ms if it's not already, this handles things like ('10s' or 10000)

	if (typeof inputTime !== 'number') throw new Error('@lawlzer/helpers - sleep: inputTime must be a string that represents a number.');

	const myNumber = Number(inputTime);
	return new Promise((resolve) => setTimeout(resolve, myNumber));
}
