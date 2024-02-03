import { initConfig } from './index';

const folderName = __dirname.split('\\').pop()!;

// We cannot test the initDotenv option, because this project does not require a .env file.
// Therefore, all calls to initDotenvSafe must have it set to false.

// We also cannot test CLI-relevant flags, because we cannot pass CLI flags to the test suite.
describe(folderName, () => {
	beforeAll(() => {
		(process as any).env.true = true;
		process.env.trueString = 'true';
		process.env.false = 'false';
		process.env.string = 'string';
		(process as any).env.numberNumber = 123; // we'd normally parse CLI args, but we also can't test that
		process.env.numberString = '123';
	});
	it(`will successfully handle the allowUndefined option`, () => {
		expect(initConfig({ undefined: { type: 'string', allowUndefined: true } })).toEqual({ undefined: undefined });
		expect(initConfig({ undefined: { type: 'number', allowUndefined: true } })).toEqual({ undefined: undefined });

		// Invalid values
		expect(() => initConfig({ true: { type: 'number', allowUndefined: true } })).toThrow();

		expect(() => initConfig({ string: { type: 'number', allowUndefined: true } })).toThrow();

		// Type "allowUndefined" variables as potentially undefined
		const result = initConfig({ true: { type: 'boolean', allowUndefined: true } });
		if (result.true === undefined) {
		}

		expect(initConfig({ true: { type: 'boolean', allowUndefined: true } })).toEqual({ true: true });
	});

	it(`will successfully handle the default option`, () => {
		expect(initConfig({ default: { type: 'string', default: 'default' } })).toEqual({ default: 'default' });
		expect(initConfig({ default: { type: 'number', default: 123 } })).toEqual({ default: 123 });
		expect(initConfig({ default: { type: 'boolean', default: true } })).toEqual({ default: true });

		// Invalid default values
		expect(() => initConfig({ true: { type: 'number', default: 'default' } })).toThrow();
		expect(() => initConfig({ string: { type: 'boolean', default: 'default' } })).toThrow();

		// Invalid real values, even with correct default options
		expect(() => initConfig({ true: { type: 'number', default: 123 } })).toThrow();
		expect(() => initConfig({ false: { type: 'number', default: 123 } })).toThrow();
		expect(() => initConfig({ string: { type: 'number', default: 123 } })).toThrow();

		// Work as normal
		expect(initConfig({ true: { type: 'boolean', default: true } })).toEqual({ true: true });
		expect(initConfig({ false: { type: 'boolean', default: false } })).toEqual({ false: false });
		expect(initConfig({ string: { type: 'string', default: 'default' } })).toEqual({ string: 'string' });
		expect(initConfig({ numberNumber: { type: 'number', default: 123 } })).toEqual({ numberNumber: 123 });
		expect(initConfig({ numberString: { type: 'number', default: 123 } })).toEqual({ numberString: 123 });
	});

	it(`will work when using allowUndefined and default together`, () => {
		expect(initConfig({ undefined: { type: 'string', allowUndefined: true, default: 'default' } })).toEqual({ undefined: 'default' });

		expect(() => initConfig({ undefined: { type: 'number', allowUndefined: true, default: 'hello' } })).toThrow();
	});

	it(`will work normally`, () => {
		expect(initConfig({ true: { type: 'boolean' } })).toEqual({ true: true });
		expect(initConfig({ false: { type: 'boolean' } })).toEqual({ false: false });
		expect(initConfig({ string: { type: 'string' } })).toEqual({ string: 'string' });
		expect(initConfig({ numberNumber: { type: 'number' } })).toEqual({ numberNumber: 123 });
		expect(initConfig({ numberString: { type: 'number' } })).toEqual({ numberString: 123 });
		expect(initConfig({ trueString: { type: 'boolean' } })).toEqual({ trueString: true });

		// invalid values
		expect(() => initConfig({ true: { type: 'number' } })).toThrow();
		expect(() => initConfig({ false: { type: 'number' } })).toThrow();
		expect(() => initConfig({ string: { type: 'number' } })).toThrow();
		expect(() => initConfig({ numberString: { type: 'boolean' } })).toThrow();
		expect(() => initConfig({ trueString: { type: 'number' } })).toThrow();
	});
});
