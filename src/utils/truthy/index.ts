// https://stackoverflow.com/questions/47632622/typescript-and-filter-boolean
export type Truthy<T> = T extends '' | 0 | false | null | undefined ? never : T;
export function truthy<T>(value: T): value is Truthy<T> {
	return !!value;
}
