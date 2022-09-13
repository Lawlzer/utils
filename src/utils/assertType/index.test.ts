import { assertType } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not throw if the value is of the correct type', () => {
		expect(() => {
			const aString = 'foo';
			assertType({ aString }, 'string');
		}).not.toThrow();
	});

	it('will throw if passed a string, expecting a number', () => {
		expect(() => {
			const aNumber = 'foo';
			assertType({ aNumber }, 'number');
		}).toThrow();
	});

	it('will throw if passed a number, expecting a string', () => {
		expect(() => {
			const aString = 123;
			assertType({ aString }, 'string');
		}).toThrow();
	});

	it('will throw if passed a boolean, expecting a string', () => {
		expect(() => {
			const aString = true;
			assertType({ aString }, 'string');
		}).toThrow();
	});

	it('will log a message with the name of the variable', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('aString'));
	});

	it('will log a message with the value of the variable', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('hi'));
	});

	it('will log a message with the expected type', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('number'));
	});

	it('will log a message with file your code runs from', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('index.test.ts'));
	});
});
