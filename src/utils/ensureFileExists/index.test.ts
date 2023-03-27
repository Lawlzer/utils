import fs from 'fs-extra';
import path from 'path';

import { getRandomCharacters } from '../getRandomCharacters/index';
import { ensureFileExists } from './index';

const folderName = process.cwd().split('\\').pop()!;

describe(folderName, () => {
	it('will create the directory leading up to a file', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		const file = path.join(directory, 'test.txt');
		await ensureFileExists(file);
		const directoryExists = await fs.pathExists(directory);
		expect(directoryExists).toBe(true);

		await fs.remove(directory);
	});

	it('will create a file that does not exist', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		const file = path.join(directory, 'test.txt');
		await ensureFileExists(file);
		const fileExists = await fs.pathExists(file);
		expect(fileExists).toBe(true);

		await fs.remove(directory);
	});

	it('will not do anything if the file already exists', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		const file = path.join(directory, 'test.txt');
		await fs.ensureDir(directory);
		await fs.writeFile(file, 'test');

		await ensureFileExists(file);

		const fileExists = await fs.pathExists(file);
		expect(fileExists).toBe(true);

		const fileContent = await fs.readFile(file);
		expect(fileContent.toString()).toBe('test');

		await fs.remove(directory);
	});

	it('will create a file in a directory, in a directory, that does not exist (recursive)', async () => {
		const filePath = path.join(process.cwd(), 'temp', 'test', 'test 2', 'test 3', getRandomCharacters(50, { letters: true }), 'file.txt');
		await ensureFileExists(filePath, 'test');

		const fileExists = await fs.pathExists(filePath);
		expect(fileExists).toBe(true);

		const fileContent = await fs.readFile(filePath);
		expect(fileContent.toString()).toBe('test');

		await fs.remove(path.join(process.cwd(), 'temp', 'test'));
	});
});
