import { lowerCaseObjectKeys } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not do anything if the keys are already lowercase', () => {
		const obj = {
			one: 1,
		};
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual(obj);
	});

	it('will lowercase the keys of an object', () => {
		const obj = {
			ONE: 1,
		};
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual({
			one: 1,
		});
	});

	it('will lowercase the keys of an array of objects', () => {
		const obj = [
			{
				ONE: 1,
			},
			{
				TWO: 2,
			},
		];
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual([
			{
				one: 1,
			},
			{
				two: 2,
			},
		]);
	});

	it('will lowercase all keys for recursive objects + arrays', () => {
		const obj = {
			ONE: 1,
			nestedObject: {
				TWO: 2,
				nestedArray: [
					{
						THREE: 3,
					},
				],
			},
		};
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual({
			one: 1,
			nestedobject: {
				two: 2,
				nestedarray: [
					{
						three: 3,
					},
				],
			},
		});
	});

	it('will not modify the initial object', () => {
		const obj = { ONE: 1 };
		lowerCaseObjectKeys(obj);
		expect(obj).toEqual({ ONE: 1 });
	});

	it('will not lowercase strings in an array', () => {
		const obj = { arr: ['hello', 'WORLD'] };
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual({ arr: ['hello', 'WORLD'] });
	});

	it('will not lowercase strings in an object', () => {
		const obj = { one: 'ONE', two: 'TWO' };
		const result = lowerCaseObjectKeys(obj);
		expect(result).toEqual({ one: 'ONE', two: 'TWO' });
	});
});
