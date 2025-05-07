import { z } from 'zod';

import { clone } from '../../clone';
import { zodMergeSchemas } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will merge one Zod schema', () => {
		const inputArray = [
			z.object({
				foo: z.object({
					one: z.string(),
				}),
			}),
		];

		const outputZod = zodMergeSchemas(...inputArray);
		type _OutputZodType = z.infer<typeof outputZod>;
		expect(outputZod.parse({ foo: { one: 'one' } })).toEqual({ foo: { one: 'one' } });
		expect(() => outputZod.parse({ foo: 'this is invalid' })).toThrow();
	});
});

it('will merge two Zod schemas', () => {
	const inputArray = [
		z.object({
			foo: z.object({
				one: z.string(),
			}),
		}),
		z.object({
			foo: z.object({
				two: z.string(),
			}),
		}),
	];

	const outputZod = zodMergeSchemas(...inputArray);
	type _OutputZodType = z.infer<typeof outputZod>;
	expect(outputZod.parse({ foo: { one: 'one', two: 'two' } })).toEqual({ foo: { one: 'one', two: 'two' } });
	expect(() => outputZod.parse({ foo: 'this is invalid' })).toThrow();
});

it('will merge three Zod schemas', () => {
	const inputArray = [
		z.object({
			foo: z.object({
				one: z.string(),
			}),
		}),
		z.object({
			foo: z.object({
				two: z.string(),
			}),
		}),
		z.object({
			foo: z.object({
				three: z.string(),
			}),
		}),
	];

	const outputZod = zodMergeSchemas(...inputArray);
	type _OutputZodType = z.infer<typeof outputZod>;
	expect(outputZod.parse({ foo: { one: 'one', two: 'two', three: 'three' } })).toEqual({ foo: { one: 'one', two: 'two', three: 'three' } });
});

it('will merge nested Zod schemas', () => {
	const inputArray = [
		z.object({
			foo: z.object({
				one: z.object({
					one: z.string(),
				}),
			}),
		}),
		z.object({
			foo: z.object({
				one: z.object({
					two: z.string(),
				}),
			}),
		}),
	];

	const outputZod = zodMergeSchemas(...inputArray);
	type _OutputZodType = z.infer<typeof outputZod>;
	expect(outputZod.parse({ foo: { one: { one: 'one', two: 'two' } } })).toEqual({ foo: { one: { one: 'one', two: 'two' } } });
});

it('will not affect the input Zod schemas', () => {
	const inputArray = [
		z.object({
			foo: z.object({
				one: z.string(),
			}),
		}),
		z.object({
			foo: z.object({
				two: z.string(),
			}),
		}),
	];

	const clonedInput = clone(inputArray);

	const _outputZod = zodMergeSchemas(...inputArray);
	type _OutputZodType = z.infer<typeof _outputZod>;

	expect(clonedInput).toEqual(inputArray);
});
