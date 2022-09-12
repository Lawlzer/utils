import fs from 'fs-extra';

import { throwError } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will throw an error', () => {
		expect(() => throwError('test')).toThrow();
	});

	it('will log something', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => throwError('test')).toThrow();
		expect(consoleSpy).toHaveBeenCalled();
		consoleSpy.mockRestore();
	});

	it('will log a stack trace', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => throwError('test')).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('  at '));
		consoleSpy.mockRestore();
	});

	// We could add specific tests to ensure the file name, function name, etc are logged.
	// However, the exact implementation/log details are not required and will change. As long as the stack trace is logged, it's fine.
});
