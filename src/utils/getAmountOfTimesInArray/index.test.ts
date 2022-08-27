import { getAmountOfTimesInArray } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return 0 if the item is not in the array', () => {
		const array = [1, 2, 3];
		const itemToFind = 4;
		const result = getAmountOfTimesInArray(array, itemToFind);
		expect(result).toBe(0);
	});

	it('will return 1 if the item is in the array once', () => {
		const array = [1, 2, 3];
		const itemToFind = 2;
		const result = getAmountOfTimesInArray(array, itemToFind);
		expect(result).toBe(1);
	});

	it('will return 25 if the item is in the array 25 times', () => {
		let array = [];
		for (let i = 0; i < 25; i++) {
			array.push(1);
		}
		const result = getAmountOfTimesInArray(array, 1);
		expect(result).toBe(25);
	});

	it('will throw an error if the input is not an array', () => {
		const array = 'not an array' as any;
		const itemToFind = 1;
		expect(() => getAmountOfTimesInArray(array, itemToFind)).toThrow();
	});

	it.todo('will handle nested arrays');
	it.todo('will handle nested objects');
});
