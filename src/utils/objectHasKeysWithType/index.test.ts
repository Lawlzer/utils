import { objectHasKeysWithType } from './index';
const folderName = __dirname.split('\\').pop()!;

describe('objectHasKeysWithType', () => {
	it('will return true if the specified types are correct', () => {
		const object = { a: 1, b: '2', c: true };
		expect(objectHasKeysWithType(object, ['a'], 'number')).toBe(true);
	});

	it('will return false if any type is incorrect', () => {
		const object = { a: 1, b: '2', c: true };
		expect(objectHasKeysWithType(object, ['a'], 'string')).toBe(false);
	});
});
