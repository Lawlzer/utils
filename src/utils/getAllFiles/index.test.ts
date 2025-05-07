import fs from 'fs-extra';
import path from 'path';

import { getAllFiles } from './index';

const folderName = __dirname.split('\\').pop()!;

describe(folderName, () => {
	it('will get all files from a path', async () => {
		const files = await getAllFiles(__dirname);
		expect(files.length).toBeGreaterThan(0);
		expect(files.some((file) => file.endsWith('index.test.ts'))).toBe(true);
		expect(files.some((file) => file.endsWith('index.ts'))).toBe(true);
	});

	it('it will work for nested paths', async () => {
		const srcPath = path.resolve(__dirname, '../../');
		const files = await getAllFiles(srcPath);
		expect(files.length).toBeGreaterThan(0);
		expect(files.some((file) => file.includes(path.join('utils', 'getAllFiles', 'index.ts')))).toBe(true);
	});

	it('will crash if given an invalid path', async () => {
		try {
			await getAllFiles('invalid path');
			expect(true).toBe(false);
		} catch (e: any) {
			expect(e.code).toBe('ENOENT');
		}
	});

	describe('excludeDirs functionality', () => {
		const testDirParent = path.join(__dirname, 'temp_getAllFiles_test');
		const testDirPath = path.join(testDirParent, 'rootDir');
		const includeDirPath = path.join(testDirPath, 'includeDir');
		const excludeDirPath1 = path.join(testDirPath, 'excludeDir1');
		const excludeDirPath2 = path.join(testDirPath, 'deeply', 'excludedDir2');

		const rootFile = path.join(testDirPath, 'rootFile.txt');
		const includedFile = path.join(includeDirPath, 'includedFile.txt');
		const excludedFile1 = path.join(excludeDirPath1, 'excludedFile1.txt');
		const excludedFile2 = path.join(excludeDirPath2, 'excludedFile2.txt');

		beforeAll(async () => {
			await fs.ensureDir(includeDirPath);
			await fs.ensureDir(excludeDirPath1);
			await fs.ensureDir(excludeDirPath2);

			await fs.writeFile(rootFile, 'root content');
			await fs.writeFile(includedFile, 'included content');
			await fs.writeFile(excludedFile1, 'excluded content 1');
			await fs.writeFile(excludedFile2, 'excluded content 2');
		});

		afterAll(async () => {
			await fs.remove(testDirParent);
		});

		it('will get all files if excludeDirs is empty or not provided', async () => {
			const files = await getAllFiles(testDirPath);
			expect(files).toHaveLength(4);
			expect(files).toContain(rootFile);
			expect(files).toContain(includedFile);
			expect(files).toContain(excludedFile1);
			expect(files).toContain(excludedFile2);
		});

		it('will exclude a single specified directory name at the top level', async () => {
			const files = await getAllFiles(testDirPath, ['excludeDir1']);
			expect(files).toHaveLength(3);
			expect(files).toContain(rootFile);
			expect(files).toContain(includedFile);
			expect(files).not.toContain(excludedFile1);
			expect(files).toContain(excludedFile2);
		});

		it('will exclude a single specified directory name even if nested', async () => {
			const files = await getAllFiles(testDirPath, ['excludedDir2']);
			expect(files).toHaveLength(3);
			expect(files).toContain(rootFile);
			expect(files).toContain(includedFile);
			expect(files).toContain(excludedFile1);
			expect(files).not.toContain(excludedFile2);
		});

		it('will exclude multiple specified directory names', async () => {
			const files = await getAllFiles(testDirPath, ['excludeDir1', 'excludedDir2']);
			expect(files).toHaveLength(2);
			expect(files).toContain(rootFile);
			expect(files).toContain(includedFile);
			expect(files).not.toContain(excludedFile1);
			expect(files).not.toContain(excludedFile2);
		});

		it('will not exclude directories if names do not match exactly', async () => {
			const files = await getAllFiles(testDirPath, ['excludeDir']);
			expect(files).toHaveLength(4);
		});

		it('will return an empty array for a path that only contains excluded dirs or is empty', async () => {
			const singleExcludePath = path.join(testDirParent, 'onlyExclude');
			await fs.ensureDir(path.join(singleExcludePath, 'toBeExcluded'));
			await fs.writeFile(path.join(singleExcludePath, 'toBeExcluded', 'file.txt'), 'content');

			const files = await getAllFiles(singleExcludePath, ['toBeExcluded']);
			expect(files).toHaveLength(0);

			const emptyDirPath = path.join(testDirParent, 'emptyDir');
			await fs.ensureDir(emptyDirPath);
			const emptyFiles = await getAllFiles(emptyDirPath, ['someDir']);
			expect(emptyFiles).toHaveLength(0);
		});
	});
});
