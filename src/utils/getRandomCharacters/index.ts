interface Options {
	upperCase?: boolean;
	lowerCase?: boolean;
	numbers?: boolean;
	symbols?: boolean;
}

/**
 * Generates a random string of characters.
 *
 * If no options are provided, it will generate a random string of characters that are uppercase, lowercase, numbers, and symbols.
 *
 * If ANY option is provided, it will use THOSE parameters, and not the defaults.
 */
export function getRandomCharacters(length: number, userOptions?: Options): string {
	// if no userOptions were passed in, all options should be true.
	if (!userOptions)
		userOptions = {
			upperCase: true,
			lowerCase: true,
			numbers: true,
			symbols: true,
		};

	// if every option is false, throw an error
	if (!userOptions.upperCase && !userOptions.lowerCase && !userOptions.numbers && !userOptions.symbols) throw new Error(`@lawlzer/helpers: userOptions was passed in, but every value is false: ${userOptions}.`);

	let validCharacters = '';
	validCharacters += userOptions.upperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
	validCharacters += userOptions.lowerCase ? 'abcdefghijklmnopqrstuvwxyz' : '';
	validCharacters += userOptions.numbers ? '0123456789' : '';
	validCharacters += userOptions.symbols ? '!@#$%^&*()_+-=[]{};:|,./<>?' : '';

	let result = '';
	for (let i = 0; i < length; i++) {
		result += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
	}
	return result;
}
