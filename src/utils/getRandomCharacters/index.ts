import { throwError } from '../throwError';

/**
 * Generates a random string of characters.
 *
 * If no options are provided, it will generate a random string of characters that are characters, numbers, and symbols.
 *
 * If at least ONE option is provided, it will use THOSE parameters, and not the defaults.
 */

export function getRandomCharacters(length: number, { letters = false, numbers = false, symbols = false }: { letters?: boolean; numbers?: boolean; symbols?: boolean }): string {
	// if every option is false, throw an error
	if (!letters && !numbers && !symbols) throwError(`@lawlzer/utils: userOptions was passed in, but every value is false.`);

	let validCharacters = '';
	if (letters) validCharacters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (numbers) validCharacters += '0123456789';
	if (symbols) validCharacters += '!@#$%^&*()_+-=[]{};:|,./<>?';

	let result = '';
	for (let i = 0; i < length; i++) {
		result += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
	}
	return result;
}
