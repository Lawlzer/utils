export interface UnknownObject {
	[key: string]: unknown;
}
export type AllTypes = 'string' | 'number' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'object' | 'function' | 'null' | 'array';
export interface Dictionary<T> {
	[key: string]: T;
}

export type ForceSimplify<T> = T extends Record<string, unknown> ? { [P in keyof T]: ForceSimplify<T[P]> } : T;
