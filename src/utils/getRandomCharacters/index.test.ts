import { getRandomCharacters } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not throw an error without a second argument', async () => {
		expect(() => getRandomCharacters(50)).not.toThrow();
	});

	it('will generate different random characters', async () => {
		const randomCharacters = getRandomCharacters(50);
		const randomCharacters2 = getRandomCharacters(50);
		expect(randomCharacters).not.toBe(randomCharacters2);
	});

	it('will generate random characters with the correct length', async () => {
		const randomCharacters = getRandomCharacters(50);
		expect(randomCharacters.length).toBe(50);
	});

	it('will only use one type<>, if one is passed', async () => {
		const randomCharacters = getRandomCharacters(50, { upperCase: true });
		expect(randomCharacters.length).toBe(50);

		// Every character should be uppercase
		for (const character of randomCharacters) {
			expect(character).toBe(character.toUpperCase());
		}
	});

	it('will work with two options', async () => {
		const randomCharacters = getRandomCharacters(50, { upperCase: true, lowerCase: true });
		expect(randomCharacters.length).toBe(50);

		// Every character should be an uppercase, or lowercase character
		for (const character of randomCharacters) {
			let validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
			expect(validCharacters.includes(character)).toBe(true);
		}
	});

	it('will work with symbols', async () => {
		const randomCharacters = getRandomCharacters(50, { symbols: true });
		expect(randomCharacters.length).toBe(50);
		// Every character should be a symbol
		for (const character of randomCharacters) {
			let validCharacters = '!@#$%^&*()_+-=[]{};:|,./<>?';
			expect(validCharacters.includes(character)).toBe(true);
		}
	});
	it('will throw an error if there is an empty second argument', async () => {
		expect(() => getRandomCharacters(50, {})).toThrow();
	});
});
