import { getFlag } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	// Resetting the process.argv and process.env this way will actually modify how they work!
	// As an example, process.env capitalization does not matter. If you reset it to {}, capitalization does matter!
	// However, this is also how it works on Linux! But.. maybe there are some other side effects? I hope not
	beforeEach(() => {
		process.argv[2] = '';
		delete process.env.flag;
		// process.env.flag = undefined;
		// process.argv = [];
		// process.env = {};
		// process.env.flag = undefined;
		// process.env.FLAG = undefined;
		// delete process.argv[2];
	});

	it('CLI Boolean: It will parse "--flag" as "true"', () => {
		process.argv[2] = '--flag';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});
	it('CLI Boolean: It will not care about casing when parsing the [key]', () => {
		process.argv[2] = '--FLag';
		expect(getFlag('flaG', 'boolean')).toBe(true);
	});
	it('CLI Boolean: It will parse "--flag=true" as "true"', () => {
		process.argv[2] = '--flag=true';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});
	it('CLI Boolean: It will parse "--flag=false" as "false"', () => {
		process.argv[2] = '--flag=false';
		expect(getFlag('flag', 'boolean')).toBe(false);
	});
	it('CLI Boolean: It will throw an error if the flag is not a boolean', () => {
		process.argv[2] = '--flag=not-a-boolean';
		expect(() => getFlag('flag', 'boolean')).toThrow();
	});
	it('CLI Boolean: It will return undefined if the flag is not set', () => {
		expect(getFlag('flag', 'boolean')).toBe(undefined);
	});
	it('CLI Boolean: It will parse "flag" as true', () => {
		process.argv[2] = 'flag';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});

	it('CLI String: It will parse "--flag=hello" as "hello"', () => {
		process.argv[2] = '--flag=hello';
		expect(getFlag('flag', 'string')).toBe('hello');
	});
	it('CLI String: It will parse "--flag=true" as "true"', () => {
		process.argv[2] = '--flag=true';
		expect(getFlag('flag', 'string')).toBe('true');
	});
	it('CLI String: It will parse "--flag=false" as "false"', () => {
		process.argv[2] = '--flag=false';
		expect(getFlag('flag', 'string')).toBe('false');
	});
	it('CLI String: It will parse "--flag=123" as "123"', () => {
		process.argv[2] = '--flag=123';
		expect(getFlag('flag', 'string')).toBe('123');
	});
	it('CLI String: It will parse "flag=hello" as hello', () => {
		process.argv[2] = 'flag=hello';
		expect(getFlag('flag', 'string')).toBe('hello');
	});
	it('CLI String: It will parse flags with dashes in them', () => {
		process.argv[2] = '--flag-with-dashes=hello';
		expect(getFlag('flag-with-dashes', 'string')).toBe('hello');
	});
	it('CLI String: It will parse flags with equal signs in them', () => {
		process.argv[2] = '--flag=hel=lo';
		expect(getFlag('flag', 'string')).toBe('hel=lo');
	});
	it('CLI String: It will NOT throw an error if it tries to parse "--flag" (but may send a warning)', () => {
		process.argv[2] = '--flag';
		expect(getFlag('flag', 'string')).toBe('');
	});

	it('CLI Number: It will parse "--flag=123" as 123', () => {
		process.argv[2] = '--flag=123';
		expect(getFlag('flag', 'number')).toBe(123);
	});
	it('CLI Number: It will parse "flag=123" as 123', () => {
		process.argv[2] = 'flag=123';
		expect(getFlag('flag', 'number')).toBe(123);
	});
	it('CLI Number: It will throw an error if it tries to parse "--flag"', () => {
		process.argv[2] = '--flag';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
	it('CLI Number: It will throw an error if it tries to parse "--flag=hello"', () => {
		process.argv[2] = '--flag=hello';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
	it('CLI Number: It will throw an error if it tries to parse "--flag=true"', () => {
		process.argv[2] = '--flag=true';
		expect(() => getFlag('flag', 'number')).toThrow();
	});

	it('ENV Boolean: It will parse "flag=true" as true', () => {
		process.env.flag = 'true';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});
	it('ENV Boolean: It will parse "flag=false" as false', () => {
		process.env.flag = 'false';
		expect(getFlag('flag', 'boolean')).toBe(false);
	});
	it('ENV Boolean: It will parse "flag" as true', () => {
		process.env.flag = '';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});
	it('ENV Boolean: It will throw if parsing "flag=hello"', () => {
		process.env.flag = 'hello';
		expect(() => getFlag('flag', 'boolean')).toThrow();
	});
	it('ENV Boolean: It will throw if parsing "flag=123"', () => {
		process.env.flag = '123';
		expect(() => getFlag('flag', 'boolean')).toThrow();
	});
	it('ENV Boolean: It will not care about casing in the [key]', () => {
		process.env.FLag = 'true';
		expect(getFlag('flaG', 'boolean')).toBe(true);
	});
	it('ENV Boolean: It will not care about casing in the [value]', () => {
		process.env.flag = 'TrUe';
		expect(getFlag('flag', 'boolean')).toBe(true);
	});
	it('ENV Boolean: It will return undefined if the flag is not set', () => {
		expect(getFlag('flag', 'boolean')).toBe(undefined);
	});

	it('ENV String: It will parse "flag=hello" as hello', () => {
		process.env.flag = 'hello';
		expect(getFlag('flag', 'string')).toBe('hello');
	});
	it('ENV String: It will parse "flag=true" as true', () => {
		process.env.flag = 'true';
		expect(getFlag('flag', 'string')).toBe('true');
	});
	it('ENV String: It will parse "flag=false" as false', () => {
		process.env.flag = 'false';
		expect(getFlag('flag', 'string')).toBe('false');
	});
	it('ENV String: It will parse "flag=123" as 123', () => {
		process.env.flag = '123';
		expect(getFlag('flag', 'string')).toBe('123');
	});
	it('ENV String: It will correctly parse "flag" as \'\'', () => {
		process.env.flag = '';
		expect(getFlag('flag', 'string')).toBe('');
	});
	it('ENV String: It will not throw an error if it tries to parse "flag="', () => {
		process.env.flag = '=';
		expect(() => getFlag('flag', 'string')).not.toThrow();
	});
	it('ENV String: It will not care about casing in the [key]', () => {
		process.env.FLag = 'hello';
		expect(getFlag('flaG', 'string')).toBe('hello');
	});
	it('ENV String: It will not care about casing in the [value]', () => {
		process.env.flag = 'HeLlO';
		expect(getFlag('flag', 'string')).toBe('HeLlO');
	});
	it('ENV String: It will return undefined if the flag is not set', () => {
		expect(getFlag('flag', 'string')).toBe(undefined);
	});

	it('ENV Number: It will parse "flag=123" as 123', () => {
		process.env.flag = '123';
		expect(getFlag('flag', 'number')).toBe(123);
	});
	it('ENV Number: It will throw an error if it tries to parse "flag"', () => {
		process.env.flag = '';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
	it('ENV Number: It will throw an error if it tries to parse "flag=hello"', () => {
		process.env.flag = 'hello';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
	it('ENV Number: It will throw an error if it tries to parse "flag=true"', () => {
		process.env.flag = 'true';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
	it('ENV Number: It will not care about casing in the [key]', () => {
		process.env.FLag = '123';
		expect(getFlag('flaG', 'number')).toBe(123);
	});
	it('ENV Number: It will not care about casing in the [value]', () => {
		process.env.flag = '123';
		expect(getFlag('flag', 'number')).toBe(123);
	});
	it('ENV Number: It will return undefined if the flag is not set', () => {
		expect(getFlag('flag', 'number')).toBe(undefined);
	});

	it('Will throw an error if there is a CLI variable, and an ENV variable with the same name', () => {
		process.argv[2] = '--flag=123';
		process.env.flag = 'hello';
		expect(() => getFlag('flag', 'number')).toThrow();
	});
});
