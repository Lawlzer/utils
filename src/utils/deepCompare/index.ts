export function deepCompare(x: unknown, y: unknown): boolean {
	if (x === y) return true;
	// if both x and y are null or undefined and exactly the same

	if (!(x instanceof Object) || !(y instanceof Object)) return false;
	// if they are not strictly equal, they both need to be Objects

	if (x.constructor !== y.constructor) return false;
	// they must have the exact same prototype chain, the closest we can do is test the constructor.

	let p;
	for (p in x) {
		if (!Object.prototype.hasOwnProperty.call(x, p)) continue;
		// other properties were tested using x.constructor === y.constructor

		if (!Object.prototype.hasOwnProperty.call(y, p)) return false;
		// allows to compare x[ p ] and y[ p ] when set to undefined

		if (x[p as keyof typeof x] === y[p as keyof typeof y]) continue;
		// if they have the same strict value or identity then they are equal

		if (typeof x[p as keyof typeof x] !== 'object') return false;
		// Numbers, Strings, Functions, Booleans must be strictly equal

		if (!deepCompare(x[p as keyof typeof x], y[p as keyof typeof y])) return false;
		// Objects and Arrays must be tested recursively
	}

	for (p in y) {
		if (Object.prototype.hasOwnProperty.call(y, p) && !Object.prototype.hasOwnProperty.call(x, p)) {
			return false;
		}
	}
	// allows x[ p ] to be set to undefined

	return true;
}
