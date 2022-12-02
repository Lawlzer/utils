import path from 'path';

import { getFlag } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	// Resetting the process.argv and process.env this way will actually modify how they work!
	// As an example, process.env capitalization does not matter. If you reset it to {}, capitalization does matter!
	// beforeEach(() => {
	// 	process.argv = [];
	// 	process.env = {};
	// });

	it('will parse --flag as true', () => {
		process.argv[2] = '--test1';
		const flag = getFlag('test1');
		expect(flag).toBe(true);
	});

	it('will parse -flag as true', () => {
		process.argv[2] = '-test2';
		const flag = getFlag('test2');
		expect(flag).toBe(true);
	});

	it('will parse "--flag=value" as value', () => {
		process.argv[2] = '--test3=value';
		const flag = getFlag('test3');
		expect(flag).toBe('value');
	});

	it('will parse "-flag=value" as value', () => {
		process.argv[2] = '-test4=value';
		const flag = getFlag('test4');
		expect(flag).toBe('value');
	});

	it('will parse "flag" as true', () => {
		process.argv[2] = 'test5';
		const flag = getFlag('test5');
		expect(flag).toBe(true);
	});

	it('will return undefined if the flag is not found', () => {
		const flag = getFlag('flagThatDoesntExist');
		expect(flag).toBeUndefined();
	});

	it('will not parse a number', () => {
		process.argv[2] = '--test6=12';
		const flag = getFlag('test6');
		expect(flag).toBe('12');
	});

	it('will parse --flag=true as true', () => {
		process.argv[2] = '--test7=true';
		const flag = getFlag('test7');
		expect(flag).toBe(true);
	});

	it('will parse --flag=false as false', () => {
		process.argv[2] = '--test8=false';
		const flag = getFlag('test8');
		expect(flag).toBe(false);
	});

	it('will parse flags with dashes', () => {
		process.argv[2] = '--flag-with-dashes1=foo';
		const flag = getFlag('flag-with-dashes1');
		expect(flag).toBe('foo');
	});

	it('will not mis-parse part of a flag', () => {
		process.argv[2] = '--flag9-with-dashes2';
		const flag1 = getFlag('flag9');
		expect(flag1).toBeUndefined();

		const flag2 = getFlag('flag9-with');
		expect(flag2).toBeUndefined();

		const flag3 = getFlag('dashes');
		expect(flag3).toBeUndefined();
	});

	it('will not incorrectly parse a flag that starts with the string', () => {
		process.argv[2] = '--flagTricked';
		const flag1 = getFlag('flag10');
		expect(flag1).toBeUndefined();
	});

	it('will parse multiple flags', () => {
		process.argv[2] = '--flag11=foo';
		process.argv[3] = '--flag12=bar';
		const flag1 = getFlag('flag11');
		expect(flag1).toBe('foo');

		const flag2 = getFlag('flag12');
		expect(flag2).toBe('bar');
	});

	it('will parse differently capitalized flags', () => {
		process.argv[2] = '--flAG13=foo';
		const flag = getFlag('fLag13');
		expect(flag).toBe('foo');
	});

	it('will not lowercase the flag value', () => {
		process.argv[2] = '--flag14=FOO';
		const flag = getFlag('flag14');
		expect(flag).toBe('FOO');
	});

	it('will parse env variables', () => {
		process.env.flag15 = 'foo';
		const flag = getFlag('flag15');
		expect(flag).toBe('foo');
	});

	it('will parse env variables with dashes', () => {
		process.env['FLAG16-WITH-DASHES'] = 'foo';
		const flag = getFlag('FLAG16-WITH-DASHES');
		expect(flag).toBe('foo');
	});

	it('will parse env variables with different capitalization', () => {
		process.env.FLag17 = 'foo';
		const flag = getFlag('flAg17');
		expect(flag).toBe('foo');
	});
});
