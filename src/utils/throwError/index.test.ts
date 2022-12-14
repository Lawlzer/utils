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
});
