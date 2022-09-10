export interface UnknownObject {
	[key: string]: unknown;
}
export type AllTypes = 'string' | 'number' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'object' | 'function' | 'null' | 'array';
export interface Dictionary<T> {
	[key: string]: T;
}

export type ForceSimplify<T> = T extends Record<string, unknown> ? { [P in keyof T]: ForceSimplify<T[P]> } : T;

// from the TypeScript Discord server
export type U2I<U> = (U extends U ? (u: U) => 0 : never) extends (i: infer I) => 0 ? Extract<I, U> : never;
