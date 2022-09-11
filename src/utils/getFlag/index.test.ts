import path from 'path';

import { getFlag } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will parse --flag as true', () => {
		process.argv[2] = '--flag';
		const flag = getFlag('flag');
		expect(flag).toBe(true);
	});

	it('will parse -flag as true', () => {
		process.argv[2] = '-flag';
		const flag = getFlag('flag');
		expect(flag).toBe(true);
	});

	it('will parse "--flag=value" as value', () => {
		process.argv[2] = '--flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	});

	it('will parse "-flag=value" as value', () => {
		process.argv[2] = '-flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	});

	it('will parse "flag" as true', () => {
		process.argv[2] = 'flag';
		const flag = getFlag('flag');
		expect(flag).toBe(true);
	});

	it('will return undefined if the flag is not found', () => {
		const flag = getFlag('flagThatDoesntExist');
		expect(flag).toBeUndefined();
	});

	it('will not parse a number', () => {
		process.argv[2] = '--flag=12';
		const flag = getFlag('flag');
		expect(flag).toBe('12');
	});

	it('will parse --flag=true as true', () => {
		process.argv[2] = '--flag=true';
		const flag = getFlag('flag');
		expect(flag).toBe(true);
	});

	it('will parse --flag=false as false', () => {
		process.argv[2] = '--flag=false';
		const flag = getFlag('flag');
		expect(flag).toBe(false);
	});

	it('will parse flags with dashes', () => {
		process.argv[2] = '--flag-with-dashes=foo';
		const flag = getFlag('flag-with-dashes');
		expect(flag).toBe('foo');
	});

	it('will not incorrectly parse a flag with dashes', () => {
		process.argv[2] = '--flag-with-dashes';
		const flag1 = getFlag('flag');
		expect(flag1).toBeUndefined();

		const flag2 = getFlag('with');
		expect(flag2).toBeUndefined();

		const flag3 = getFlag('dashes');
		expect(flag3).toBeUndefined();
	});

	it('will not incorrectly parse a flag that starts with the string', () => {
		process.argv[2] = '--flagTricked';
		const flag1 = getFlag('flag');
		expect(flag1).toBeUndefined();
	});

	it('will parse multiple flags', () => {
		process.argv[2] = '--flag1=foo';
		process.argv[3] = '--flag2=bar';
		const flag1 = getFlag('flag1');
		expect(flag1).toBe('foo');

		const flag2 = getFlag('flag2');
		expect(flag2).toBe('bar');
	});
});
