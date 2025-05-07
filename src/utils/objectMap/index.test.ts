import { objectMap } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will map over an object', () => {
		const obj = {
			one: 1,
			two: 2,
			three: 3,
		};
		const result = objectMap(
			obj,
			(val, _obj) => val + 1,
			(key, _obj) => key + '1'
		);
		expect(result).toEqual({
			one1: 2,
			two1: 3,
			three1: 4,
		});
	});

	it('will not modify the input object', () => {
		const obj = {
			one: 1,
			two: 2,
			three: 3,
		} as const;
		objectMap(
			obj,
			(val, _obj) => val + 1,
			(key, _obj) => key + '1'
		);
		expect(obj).toEqual({
			one: 1,
			two: 2,
			three: 3,
		});
	});
});
