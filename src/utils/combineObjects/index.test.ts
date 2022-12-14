import { combineObjects } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will combine two objects with different properties', () => {
		const obj1 = { a: 'a' };
		const obj2 = { b: 'b' };
		const result = combineObjects(obj1, obj2);
		expect(result).toEqual({ a: 'a', b: 'b' });
	});

	it('will combine 3 objects with different properties', () => {
		const obj1 = { a: 'a' };
		const obj2 = { b: 'b' };
		const obj3 = { c: 'c' };
		const result = combineObjects(obj1, obj2, obj3);
		expect(result).toEqual({ a: 'a', b: 'b', c: 'c' });
	});

	it('will combine an empty object with a normal object', () => {
		const obj1 = { a: 'a' };
		const obj2 = {};
		const result = combineObjects(obj1, obj2);
		expect(result).toEqual({ a: 'a' });
	});

	it('will add numbers', () => {
		const obj1 = { a: 1 };
		const obj2 = { a: 2 };
		const result = combineObjects(obj1, obj2);
		expect(result).toEqual({ a: 3 });
	});

	it('will recursively combine objects', () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { c: 2 } };
		const result = combineObjects(obj1, obj2);
		expect(result).toEqual({ a: { b: 1, c: 2 } });
	});

	it('will recursively add numbers', () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { b: 2 } };
		const result = combineObjects(obj1, obj2);
		expect(result).toEqual({ a: { b: 3 } });
	});

	it('will throw an error if two objects have the same property, with different types (non-number)', () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { b: '2' } };
		expect(() => combineObjects(obj1, obj2)).toThrow();
	});

	it('will throw an error if two objects have the same property, with different values (same-type)', () => {
		const obj1 = { a: { b: 'value1' } };
		const obj2 = { a: { b: 'value2' } };
		expect(() => combineObjects(obj1, obj2)).toThrow();
	});
});
