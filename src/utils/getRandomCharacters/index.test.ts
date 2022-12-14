import { getRandomCharacters } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will throw an error if there are no characters provided', async () => {
		expect(() => getRandomCharacters(50, {})).toThrow();
	});

	it('will generate random characters with the correct length', async () => {
		const randomCharacters = getRandomCharacters(50, { letters: true });
		expect(randomCharacters.length).toBe(50);
	});

	it('will only use one type<>, if one is passed', async () => {
		const randomCharacters = getRandomCharacters(50, { letters: true });
		expect(randomCharacters.length).toBe(50);

		// Every character should be a letter
		const regex = new RegExp('[a-zA-Z]');
		expect(randomCharacters.split('').every((character) => regex.test(character))).toBe(true);
	});

	it('will work with two options', async () => {
		const randomCharacters = getRandomCharacters(50, { numbers: true, letters: true });
		expect(randomCharacters.length).toBe(50);

		// Every character should be an uppercase, or lowercase character
		const numbers = '0123456789';
		const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let numbersFound = false;
		let lettersFound = false;
		for (const character of randomCharacters) {
			if (numbers.includes(character)) numbersFound = true;
			if (letters.includes(character)) lettersFound = true;
		}
		expect(numbersFound).toBe(true);
		expect(lettersFound).toBe(true);
	});

	it('will work with symbols', async () => {
		const randomCharacters = getRandomCharacters(50, { symbols: true });
		expect(randomCharacters.length).toBe(50);
		// Every character should be a symbol
		for (const character of randomCharacters) {
			const validCharacters = '!@#$%^&*()_+-=[]{};:|,./<>?';
			expect(validCharacters.includes(character)).toBe(true);
		}
	});
	it('will throw an error if there is an empty second argument', async () => {
		expect(() => getRandomCharacters(50, {})).toThrow();
	});
});
