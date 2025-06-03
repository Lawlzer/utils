import fs from 'fs-extra';
import path from 'path';

import { getRandomCharacters } from '../getRandomCharacters/index';

import { ensureDirectoryExists } from './index';

const folderName = process.cwd().split('\\').pop()!;

describe(folderName, () => {
	it('will create a directory that does not exist', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		await ensureDirectoryExists(directory);
		const directoryExists = await fs.pathExists(directory);
		expect(directoryExists).toBe(true);

		await fs.remove(directory);
	});

	it('will not do anything if the directory already exists', async () => {
		await fs.ensureDir(path.resolve(process.cwd(), 'temp'));
		await fs.ensureDir(path.resolve(process.cwd(), 'temp', 'test'));
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		await ensureDirectoryExists(directory);
		const directoryExists = await fs.pathExists(directory);
		expect(directoryExists).toBe(true);

		await fs.remove(directory);
	});

	it('will create a directory if a file extension is provided', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(50, { letters: true }));
		await ensureDirectoryExists(directory);
		const directoryExists = await fs.pathExists(directory);
		expect(directoryExists).toBe(true);

		await fs.remove(directory);
	});

	it('will create a directory to create the directory (recursive)', async () => {
		const directory = path.join(process.cwd(), 'temp', 'test', 'test 2', 'test 3', getRandomCharacters(50, { letters: true }));
		await ensureDirectoryExists(directory);
		const directoryExists = await fs.pathExists(directory);
		expect(directoryExists).toBe(true);

		await fs.remove(directory);
	});
});
