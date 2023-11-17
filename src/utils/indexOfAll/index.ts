/**
 * Same as indexOf, but it returns an array of all indexes, instead of the first index only.
 */
export function indexOfAll(input: string, find: string): number[] {
	if (find === '') return []; // remove this to find a really fun error
	let indexes = [];
	let i = input.indexOf(find);
	while (i !== -1) {
		console.log('i: ', i);
		indexes.push(i);
		i = input.indexOf(find, ++i);
	}
	return indexes;
}
