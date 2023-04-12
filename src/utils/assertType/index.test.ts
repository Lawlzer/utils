import { exec, execSync } from 'child_process';
import { promisify } from 'util';

import { assertType } from './index';

const execAsync = promisify(exec);

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

	// it('will not have colour if the --no-color flag is passed', async () => {
	// 	// Launch a new Node process with the "no-color" flag set
	// 	// const command = `console.log('hi');`;
	// 	const command = `const { assertType } = require('./index'); const aString ='hi'; assertType({aString}, 'number')`;
	// 	const result = await execSync(`node -e ${command}`, { encoding: 'utf8', env: { ...process.env, no_color: '1' } });

	// 	// console.log('result: ', result);
	// 	// expect(stdout.trim()).toMatch(/^v\d+\.\d+\.\d+$/); // check if output matches expected format
	// });
});
