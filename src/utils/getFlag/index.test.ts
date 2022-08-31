import path from 'path';

import { getFlag } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will work with a "--flag=value"', () => {
		process.argv[2] = '--flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	});

	it('will work with a "-flag=value"', () => {
		process.argv[2] = '-flag=value';
		const flag = getFlag('flag');
		expect(flag).toBe('value');
	});

	it('will work with a "flag"', () => {
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

	it('will not incorrectly parse a flag with dashes as ', () => {
		process.argv[2] = '--flag-with-dashes';
		const flag1 = getFlag('flag');
		expect(flag1).toBeUndefined();

		const flag2 = getFlag('with');
		expect(flag2).toBeUndefined();

		const flag3 = getFlag('dashes');
		expect(flag3).toBeUndefined();
	});
});
