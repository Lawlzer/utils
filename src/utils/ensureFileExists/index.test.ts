import fs from 'fs-extra';
import path from 'path';

import { getRandomCharacters } from '~/utils/getRandomCharacters/index';

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
});
