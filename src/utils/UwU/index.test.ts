import { UwU } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will not do anything if passed an empty string', () => {
		const result = UwU('');
		expect(result).toEqual('');
	});

	it('will not do anything if passed a string without anything uwu-able', () => {
		const result = UwU('hi :)');
		expect(result).toEqual('hi :)');
	});

	it('will uwu-ify a string', () => {
		const result = UwU('hello beautiful world, I love the world!');
		expect(result).toEqual('hewwo beautifuw wowwd, I wuv the wowwd!');
	});
});
