// import { objectMap } from '~/utils/objectMap';

import { objectMap } from '~/utils/objectMap';
import { Dictionary, U2I } from '~/utils/types/index';
import { UnknownObject } from '~/utils/types/index';

/**
 * Will not modify the initial object
 *
 * Will add numbers, if they are both integers.
 *
 * If two objects have the same property, but they are different (non-number), it will throw an error.
 *
 * Will also throw an error if the same property has different types.
 *
 * DOES NOT currently handle arrays.
 */

export function combineObjects<T extends object[]>(...args: T): U2I<T[number]> {
	let result: { [key: string]: any } = {};

	for (const obj of args) {
		// For every object passed in
		if (typeof obj !== 'object') throw new Error('combineObjects: input is not an object');
		if (Array.isArray(obj)) throw new Error('combineObjects: input is an array');
		if (obj === null) throw new Error('combineObjects: input is null');

		for (const key in obj) {
			const value = obj[key as keyof typeof obj];

			const isObject = typeof value === 'object' && value !== null;
			if (isObject) {
				result[key] = combineObjects(result[key] || {}, value);
				continue;
			}

			const isNumber = typeof value === 'number';
			if (isNumber) {
				result[key] = (result[key] || 0) + value;
				continue;
			}

			const isDifferentType = typeof result[key] !== typeof value && typeof result[key] !== 'undefined';
			if (isDifferentType) throw new Error(`@lawlzer/helpers - combineOptions: property "${key}" is different between objects`);

			const isDifferentValue = result[key] !== value && typeof result[key] !== 'undefined';
			if (isDifferentValue) throw new Error(`@lawlzer/helpers - combineOptions: "${key}" is different between objects`);

			result[key] = value;
		}
	}

	return result as U2I<T[number]>;
}
