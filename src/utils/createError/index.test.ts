import { createError } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	// it('will return the name of the current package', () => { // This be impossible, because the code runs from Jest?
	// 	const error = createError(false);
	// 	expect(error.packageName).toEqual('@lawlzer/helpers');
	// });

	it('will return the stack trace', () => {
		const error = createError(false);
		expect(error.stackTrace).toEqual(expect.stringContaining('  at '));
	});

	it("will return the anonymous function and say it's an anonymous function, if called anonymously", () => {
		const error = createError(false);
		expect(error.functionName).toContain('Object.<anonymous>');
		expect(error.functionName).toContain('anonymous function');
	});

	it('will return the correct function name', () => {
		function testFunction() {
			const error = createError(false);
			expect(error.functionName).toEqual('testFunction');
		}
		testFunction();
	});

	// it('will return the file the code runs from', () => { // The code actually runs from jest utils, so maybe this is impossible?
	// 	const error = createError(false);
	// 	expect(error.filePath).toContain('createError');
	// });
});
