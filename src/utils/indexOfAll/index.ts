/**
 * Same as indexOf, but it returns an array of all indexes, instead of the first index only.
 */
export function indexOfAll(wholeString: string, find: string): number[] {
	if (find === '') return []; // remove this to find a really fun error
	const indexes = [];
	let i = wholeString.indexOf(find);
	while (i !== -1) {
		indexes.push(i);
		i = wholeString.indexOf(find, ++i);
	}
	return indexes;
}
