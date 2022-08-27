import { returnRandomElement } from './index';
const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will return 1 random element from an array', async () => {
		const array = [1, 2, 3, 4, 5];
		const randomElement = returnRandomElement(array);
		expect(typeof randomElement).toBe('number');
	});

	it('will return different random results', async () => {
		let array = [];
		for (let i = 0; i < 10000; i++) {
			array.push(i);
		}

		const randomElement1 = returnRandomElement(array);
		const randomElement2 = returnRandomElement(array);
		expect(randomElement1).not.toBe(randomElement2);
	});

	it('will throw an error if not passed in an array', async () => {
		const array = 'not an array';
		expect(() => returnRandomElement(array as any)).toThrow();
	});

	it('will return undefined if passed in an empty array', async () => {
		const array: never[] = [];
		expect(returnRandomElement(array)).toBeUndefined();
	});

	it('will return the element, not a clone of the object', async () => {
		let inputArray: { a: number | null }[] = [{ a: 1 }];
		let randomElement = returnRandomElement(inputArray);
		randomElement.a = null;

		expect(inputArray[0].a).toBe(null);
	});
});
