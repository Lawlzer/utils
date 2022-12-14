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

	it('will throw a message that includes the name of the variable', () => {
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow('aString');
	});

	it('will throw a message that includes the value of the variable', () => {
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow('hi');
	});

	it('will throw a message that includes the expected variable type', () => {
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow('number');
	});

	it('will throw a message that includes the file the code runs from', () => {
		expect(() => {
			const aString = 'hi';
			assertType({ aString }, 'number');
		}).toThrow('index.test.ts');
	});
});
