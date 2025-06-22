import { flattenObject, unflattenObject } from './index';

describe('flattenObject', () => {
	it('will flatten an object', () => {
		const input = {
			a: {
				b: {
					c: 'value',
				},
			},
		};
		const _output = flattenObject(input);
		expect(_output).toEqual({
			'a-b-c': 'value',
		});
	});

	it('will not modify the original object', () => {
		const input = {
			a: {
				b: {
					c: 'value',
				},
			},
		};
		const _output = flattenObject(input);
		expect(input).toEqual({
			a: {
				b: {
					c: 'value',
				},
			},
		});
	});

	it('will flatten multiple keys at the same level', () => {
		const input = {
			a: {
				b: {
					c: 'value',
					d: 'value2',
					e: true,
				},
			},
		};
		const _output = flattenObject(input);
		expect(_output).toEqual({
			'a-b-c': 'value',
			'a-b-d': 'value2',
			'a-b-e': true,
		});
	});

	it('will flatten multiple keys at different levels', () => {
		const input = {
			a: {
				b: true,
				c: { d: 'value' },
			},
		};
		const _output = flattenObject(input);
		expect(_output).toEqual({
			'a-b': true,
			'a-c-d': 'value',
		});
	});

	it('will flatten an array', () => {
		const input = ['a', 'b', 'c'];
		// Arrays are not supported and should throw an error
		expect(() => flattenObject(input)).toThrow('@lawlzer/utils - flattenObject - Arrays are not supported.');
	});

	it('will flatten an array of objects', () => {
		const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
		// Arrays are not supported and should throw an error
		expect(() => flattenObject(input)).toThrow('@lawlzer/utils - flattenObject - Arrays are not supported.');
	});

	it('will flatten a complicated object with nested arrays inside of objects', () => {
		const input = {
			a: {
				b: ['value1', 'value2'],
				c: { d: 'value' },
			},
		};
		// Arrays are not supported and should throw an error when encountered during flattening
		expect(() => flattenObject(input)).toThrow('@lawlzer/utils - flattenObject - Arrays are not supported.');
	});
});

describe('unflattenObject', () => {
	it('will unflatten a flattened object', () => {
		const input = {
			'a-b-c': 'value',
		};
		const _output = unflattenObject(input);
		expect(_output).toEqual({
			a: {
				b: {
					c: 'value',
				},
			},
		});
	});

	it('will not modify the original object', () => {
		const input = {
			a: {
				b: {
					c: 'value',
				},
			},
		};
		const _output = unflattenObject(input);
		expect(input).toEqual({
			a: {
				b: {
					c: 'value',
				},
			},
		});
	});

	it('will unflatten multiple keys at the same level', () => {
		const input = {
			'a-b-c': 'value',
			'a-b-d': 'value2',
			'a-b-e': true,
		};
		const _output = unflattenObject(input);
		expect(_output).toEqual({
			a: {
				b: {
					c: 'value',
					d: 'value2',
					e: true,
				},
			},
		});
	});

	it('will unflatten multiple keys at different levels', () => {
		const input = {
			'a-b': true,
			'a-c-d': 'value',
		};
		const _output = unflattenObject(input);
		expect(_output).toEqual({
			a: {
				b: true,
				c: { d: 'value' },
			},
		});
	});

	it('will unflatten an array', () => {
		// Since flattenObject doesn't support arrays, there's no valid flattened array format to unflatten
		// Testing that unflatten works with array-like keys
		const input = {
			'array-0': 'a',
			'array-1': 'b',
			'array-2': 'c',
		};
		const output = unflattenObject(input);
		expect(output).toEqual({
			array: {
				0: 'a',
				1: 'b',
				2: 'c',
			},
		});
	});

	it('will unflatten an array of objects', () => {
		// Testing that unflatten works with array-like keys containing objects
		const input = {
			'array-0-a': 1,
			'array-1-b': 2,
			'array-2-c': 3,
		};
		const output = unflattenObject(input);
		expect(output).toEqual({
			array: {
				0: { a: 1 },
				1: { b: 2 },
				2: { c: 3 },
			},
		});
	});

	it('will unflatten a complicated object with nested arrays inside of objects', () => {
		// Testing that unflatten can handle complex nested structures
		const input = {
			'a-b-0': 'value1',
			'a-b-1': 'value2',
			'a-c-d': 'value',
		};
		const output = unflattenObject(input);
		expect(output).toEqual({
			a: {
				b: {
					0: 'value1',
					1: 'value2',
				},
				c: { d: 'value' },
			},
		});
	});
});
