import { z } from 'zod';

import { Dictionary, U2I, UnionToIntersection } from '../../types';

/**
 * Take multiple Zod schemas (atleast one), and return a fully merged Schema, with all of the types combined.
 *
 * (This will actually Intersect the schemas, not Merge them)
 */

// There might be a better way to do this...
// Merge will override nested keys, so we use intersection instead.
export function zodMergeSchemas<T extends z.AnyZodObject[]>(...arr: T): UnionToIntersection<T[number]> {
	let combined = z.object({}) as unknown as z.ZodIntersection<z.AnyZodObject, z.AnyZodObject>;
	for (const element of arr) {
		combined = z.intersection(combined, element) as unknown as z.ZodIntersection<z.AnyZodObject, z.AnyZodObject>;
	}
	return combined as unknown as UnionToIntersection<T[number]>;
}
