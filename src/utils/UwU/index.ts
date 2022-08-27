/**
 * UwU
 */

export function UwU(text: string, addFaces = false): string {
	const faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
	text = text.replace(/(?:r|l)/g, 'w'); // replace "r" and "l" with w
	text = text.replace(/(?:R|L)/g, 'W'); // replace "R" and "L" with W
	text = text.replace(/n([aeiou])/g, 'ny$1'); // replace n(vowel) with ny(vowel)
	text = text.replace(/N([aeiou])/g, 'Ny$1'); // replace N(vowel) with Ny(vowel)
	text = text.replace(/N([AEIOU])/g, 'Ny$1'); // replace N(VOWEL) with Ny(VOWEL)
	text = text.replace(/ove/g, 'uv'); // replace "ove" with "uv"
	// eslint-disable-next-line
	if (addFaces) text = text.replace(/\!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ');
	return text;
}
