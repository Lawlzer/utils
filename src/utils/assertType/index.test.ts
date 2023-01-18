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

	it('will have colour if the --no-color flag is <NOT> passed', () => {
		try {
			const aString = 'hi';
			assertType({ aString }, 'number');
			expect(true).toBe(false);
		} catch (e: any) {
			expect(e.includes('\u001b')).toBe(true);
		}
	});

	// // We cannot actually test this (without spawning a new Node process), because the --no-color flag is cached in the Node process
	// it('will not have colour if the --no-color flag is passed', () => {
	// 	process.env['no-color'] = 'true';
	// 	try {
	// 		const aString = 'hi';
	// 		assertType({ aString }, 'number');
	// 		expect(true).toBe(false);
	// 	} catch (e: any) {
	// 		// it should throw, and include a colour code in the message

	// 		expect(e.includes('[37m')).toBe(false);
	// 	}
	// 	process.env['no-color'] = undefined;
	// });
});
