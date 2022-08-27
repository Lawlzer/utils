import { replaceAll } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return the result of replacing occurrences of a string', async () => {
		const string = 'Hello World';
		const result = replaceAll(string, 'World', 'Universe');
		expect(result).toEqual('Hello Universe');
	});

	it('will not replace occurrences of a string in place', async () => {
		const string = 'Hello World';
		replaceAll(string, 'World', 'Universe');
		expect(string).not.toEqual('Hello Universe');
	});

	it('will do nothing if given an empty string', async () => {
		const string = '';
		const result = replaceAll(string, 'World', 'Universe');
		expect(result).toEqual(string);
	});

	it('will throw an error if given something other than a string', async () => {
		const string = 1 as any;
		expect(() => replaceAll(string, 'World', 'Universe')).toThrow();
	});

	it('will replace multiple instances of a string', async () => {
		const string = 'Hello World World World';
		const result = replaceAll(string, 'World', 'Universe');
		expect(result).toEqual('Hello Universe Universe Universe');
	});
});
