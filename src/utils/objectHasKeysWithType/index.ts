import type { AllTypesUnion } from '../types';

export function objectHasKeysWithType<T, K extends string>(inputObject: T, keys: readonly K[], type: AllTypesUnion): inputObject is Record<K, unknown> & T & object {
	// @ts-expect-error - We cannot index by K.
	return typeof inputObject === 'object' && inputObject !== null && keys.every((key) => key in inputObject && typeof inputObject[key] === type);
}

// a simple version:
// export function isObjectWithKey<T, K extends string>(inputObject: T, key: K): inputObject is T & object & Record<K, unknown> {
// 	return typeof inputObject === 'object' && inputObject !== null && key in inputObject;
// }
