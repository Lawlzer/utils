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
	});

	it('will log the file the code runs from', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => throwError('test')).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('index.test.ts'));
	});

	it('will log the message passed in', () => {
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		expect(() => throwError('test')).toThrow();
		expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('test'));
	});
});
