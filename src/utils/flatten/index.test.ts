import path from 'path';

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
		const output = flattenObject(input);
		expect(output).toEqual({
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
		const output = flattenObject(input);
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
		const output = flattenObject(input);
		console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoutput: ', output);
		expect(output).toEqual({
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
		const output = flattenObject(input);
		expect(output).toEqual({
			'a-b': true,
			'a-c-d': 'value',
		});
	});

	it.todo('will flatten an array');
	it.todo('will flatten an array of objects');
	it.todo('will flatten a complicated object with nested arrays inside of objects');
});

describe('unflattenObject', () => {
	it('will unflatten a flattened object', () => {
		const input = {
			'a-b-c': 'value',
		};
		const output = unflattenObject(input);
		expect(output).toEqual({
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
		const output = unflattenObject(input);
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
		const output = unflattenObject(input);
		expect(output).toEqual({
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
		const output = unflattenObject(input);
		expect(output).toEqual({
			a: {
				b: true,
				c: { d: 'value' },
			},
		});
	});

	it.todo('will unflatten an array');
	it.todo('will unflatten an array of objects');
	it.todo('will unflatten a complicated object with nested arrays inside of objects');
});
