import { Dictionary } from '~/utils/types';

/**
 * Map over the keys of an object, and return a new object with the same keys, but with the transformed values.
 *
 * Effectively works the same as Array.prototype.map, but for objects.
 *
 * HOWEVER, it does not modify the input object; it will return a new object.
 */

// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
export function objectMap<TValue, TResult>(obj: Dictionary<TValue>, valSelector: (val: TValue, obj: Dictionary<TValue>) => TResult, keySelector?: (key: string, obj: Dictionary<TValue>) => string, ctx?: Dictionary<TValue>) {
	const ret: Dictionary<TResult> = {};
	for (const key of Object.keys(obj)) {
		const retKey = keySelector ? keySelector.call(ctx || null, key, obj) : key;
		const retVal = valSelector.call(ctx || null, obj[key], obj);
		ret[retKey] = retVal;
	}
	return ret;
}
