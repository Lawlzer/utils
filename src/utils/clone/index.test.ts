import { clone } from './index';
const folderName = __dirname.split('\\').pop()!;

// TODO
describe(folderName, () => {
	it.todo('will return a copy of an object');
	it.todo('will not be the exact same as the input object');
	it.todo('will clone nested objects');
	it.todo('will clone nested arrays');
	it.todo('will work with Dates');
	it.todo('will work with RegExps');
	it.todo('will work with Maps');
	it.todo('will work with Sets');
	it.todo('will work with Functions');
	it.todo('will work with cyclic references');
	it.todo('will work for complex nested arrays & objects');

	// it('will return a copy of an object', async () => {
	// 	const object = { a: 1, b: 2, c: 3 };
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// });

	// it('will not be the exact same as the input object', async () => {
	// 	const object = { a: 1, b: 2, c: 3 };
	// 	const copy = cloneShallow(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will clone nested objects', async () => {
	// 	const object = { a: 1, b: 2, c: { d: 3, e: 4 } };
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy.c).not.toBe(object.c);
	// });

	// it('will clone arrays', async () => {
	// 	const object = [1, 2, 3];
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will clone nested arrays', async () => {
	// 	const object = [1, 2, [3, 4]];
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// 	expect(copy[2]).not.toBe(object[2]);
	// });

	// it('will clone nested arrays with nested objects', async () => {
	// 	const object = [1, 2, [3, 4, { a: 1, b: 2, c: { d: 3, e: 4, f: [5, 6, 7] } }]];
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will store Regular Expressions', async () => {
	// 	const object = /^[a-zA-Z0-9]+$/;
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will store Date objects', async () => {
	// 	const object = new Date();
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will store Functions', async () => {
	// 	const object = function () {};
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// });

	// it('will work with cyclic references', async () => {
	// 	const object = { a: 1, b: 2, c: { d: 3, e: 4 } };
	// 	object.c.f = object;
	// 	const copy = cloneShallow(object);
	// 	expect(copy).toEqual(object);
	// 	expect(copy).not.toBe(object);
	// 	expect(copy.c).not.toBe(object.c);
	// 	expect(copy.c.f).not.toBe(object.c.f);
	// });
});
