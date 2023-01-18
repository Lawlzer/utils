import { throwError } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will throw an error', () => {
		expect(() => throwError('test')).toThrow();
	});

	it('will throw an error with a message that includes the file name', () => {
		expect(() => throwError('test')).toThrow('index.test.ts');
	});

	it('will throw an error with a message that includes the message passed in', () => {
		expect(() => throwError('AAAAAAAAAAAAAAA')).toThrow('AAAAAAAAAAAAAAA');
	});

	it('will throw an error with a message that includes the stack trace', () => {
		expect(() => throwError('test')).toThrow('at ');
	});

	// If we console.log anything, it will not be try-catchable.
	it('will not console.log anything', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
		expect(() => throwError('test')).toThrow();
		expect(consoleSpy).not.toHaveBeenCalled();
		consoleSpy.mockRestore();
	});

	it('will have colour if the --no-color flag is <NOT> passed', () => {
		try {
			throwError('AAAAAAAAAAAAAAA');
		} catch (e: any) {
			expect(e.includes('\u001b')).toBe(true);
		}
	});

	// // We cannot actually test this (without spawning a new Node process), because the --no-color flag is cached in the Node process
	// it('will not have colour if the --no-color flag is passed', () => {
	// 	process.env['no-color'] = 'true';
	// try {
	// 	throwError('AAAAAAAAAAAAAAA');
	// } catch (e: any) {
	// 	expect(e.includes('\u001b')).toBe(false);
	// }
});
