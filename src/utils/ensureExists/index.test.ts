import fs from 'fs-extra';
import path from 'path';

import { ensureExists } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will create a directory if it does not exist', async () => {
		const pathToNewDirectory = path.resolve(process.cwd(), 'temp', 'test1');
		await ensureExists(pathToNewDirectory);
		const exists = await fs.pathExists(pathToNewDirectory);
		expect(exists).toBe(true);

		await fs.remove(pathToNewDirectory);
	});

	it('will create a file if it does not exist', async () => {
		const pathToNewFile = path.resolve(process.cwd(), 'temp', 'test2.txt');
		await ensureExists(pathToNewFile);
		const exists = await fs.pathExists(pathToNewFile);
		expect(exists).toBe(true);

		await fs.remove(pathToNewFile);
	});

	it('will create a file with specified content if it does not exist', async () => {
		const pathToNewFile = path.resolve(process.cwd(), 'temp', 'test3.txt');
		await ensureExists(pathToNewFile, 'test');
		const exists = await fs.pathExists(pathToNewFile);
		expect(exists).toBe(true);

		const content = await fs.readFile(pathToNewFile, 'utf8');
		expect(content).toBe('test');

		await fs.remove(pathToNewFile);
	});

	it('will not create a file if it already exists', async () => {
		const pathToNewFile = path.resolve(process.cwd(), 'temp', 'test4.txt');
		await fs.writeFile(pathToNewFile, 'test');
		await ensureExists(pathToNewFile);
		const exists = await fs.pathExists(pathToNewFile);
		expect(exists).toBe(true);

		const content = await fs.readFile(pathToNewFile, 'utf8');
		expect(content).toBe('test');

		await fs.remove(pathToNewFile);
	});

	it('will not create a directory if it already exists', async () => {
		const pathToNewDirectory = path.resolve(process.cwd(), 'temp', 'test5');
		await fs.mkdir(pathToNewDirectory);
		await ensureExists(pathToNewDirectory);
		const exists = await fs.pathExists(pathToNewDirectory);
		expect(exists).toBe(true);

		await fs.remove(pathToNewDirectory);
	});

	it('will not edit a file if it already exists', async () => {
		const pathToNewFile = path.resolve(process.cwd(), 'temp', 'test6.txt');
		await fs.writeFile(pathToNewFile, 'test');
		await ensureExists(pathToNewFile, 'test2');
		const exists = await fs.pathExists(pathToNewFile);
		expect(exists).toBe(true);

		const content = await fs.readFile(pathToNewFile, 'utf8');
		expect(content).toBe('test');

		await fs.remove(pathToNewFile);
	});
});
