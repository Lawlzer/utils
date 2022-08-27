/**
 * Replace all occurrences of a string in a string
 */

export function replaceAll(str: string, find: string, replace: string): string {
	const innerEscapeRegExp = (string: string) => {
		return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	};
	return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
}
