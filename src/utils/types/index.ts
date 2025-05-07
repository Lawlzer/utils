/**
 * An object with string: unknown key-value pairs
 *
 * If you need to narrow an UnknownObject, objectHasKeysWithType is a very useful util
 */
export type UnknownObject = Record<string, unknown>;
export type AllTypesUnion = 'array' | 'bigint' | 'boolean' | 'function' | 'null' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';
export type Dictionary<T> = Record<string, T>;

export type ForceSimplify<T> = T extends Record<string, unknown> ? { [P in keyof T]: ForceSimplify<T[P]> } : T;

// These are the exact same
export type U2I<U> = (U extends U ? (u: U) => 0 : never) extends (i: infer I) => 0 ? Extract<I, U> : never;
export type UnionToIntersection<U> = (U extends U ? (u: U) => 0 : never) extends (i: infer I) => 0 ? Extract<I, U> : never;

/**
 * MUST be called with const objects! Otherwise, the output will be weird (with lots of ?: unknown)
 */
export type ArrayToIntersection<T extends readonly any[]> = UnionToIntersection<T[number]>;

export interface NonEmptyArray<T> extends Array<T> {
	0: T;
}

export type WriteableDeep<T> = { -readonly [P in keyof T]: WriteableDeep<T[P]> };
export type Writable<T> = { -readonly [P in keyof T]: T[P] };
