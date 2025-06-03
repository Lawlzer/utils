import fs from 'fs-extra';
import path from 'path';

export interface GetAllFilesOptions {
	/** Directories to exclude from the search */
	excludeDirs?: string[];
	/** File extensions to include (e.g., ['.ts', '.js']). If not specified, all files are included */
	includeExtensions?: string[];
	/** File extensions to exclude (e.g., ['.test.ts', '.d.ts']) */
	excludeExtensions?: string[];
	/** Maximum depth to search. 0 means only the root directory */
	maxDepth?: number;
	/** Include hidden files (starting with .) */
	includeHidden?: boolean;
}

/**
 * Recursively get all files in a directory with flexible filtering options.
 *
 * @param pathToFolder The directory path to search
 * @param options Options for filtering the results
 * @returns Promise resolving to an array of absolute file paths
 *
 * @example
 * // Get all files
 * const allFiles = await getAllFiles('./src');
 *
 * @example
 * // Get only TypeScript files, excluding tests
 * const tsFiles = await getAllFiles('./src', {
 *   includeExtensions: ['.ts'],
 *   excludeExtensions: ['.test.ts', '.spec.ts'],
 *   excludeDirs: ['node_modules', 'dist']
 * });
 *
 * @example
 * // Get files with depth limit
 * const shallowFiles = await getAllFiles('./src', { maxDepth: 1 });
 */
export async function getAllFiles(pathToFolder: string, options: GetAllFilesOptions | string[] = {}): Promise<string[]> {
	// Handle legacy API where second parameter was excludeDirs array
	const opts: GetAllFilesOptions = Array.isArray(options) ? { excludeDirs: options } : options;

	const { excludeDirs = [], includeExtensions = [], excludeExtensions = [], maxDepth, includeHidden = false } = opts;

	async function getAllFilesRecursive(dir: string, depth = 0): Promise<string[]> {
		if (maxDepth !== undefined && depth > maxDepth) {
			return [];
		}

		const allFiles = await fs.readdir(dir);
		const output = await Promise.all(
			allFiles.map(async (file) => {
				// Skip hidden files if not included
				if (!includeHidden && file.startsWith('.')) {
					return [];
				}

				const filePath = path.join(dir, file);
				const isDirectory = (await fs.lstat(filePath)).isDirectory();

				if (isDirectory) {
					if (excludeDirs.includes(file)) {
						return []; // Skip this directory
					}
					return getAllFilesRecursive(filePath, depth + 1);
				}

				// Check file extension filters
				const ext = path.extname(file);

				// Check exclude extensions first
				if (excludeExtensions.length > 0 && excludeExtensions.some((e) => file.endsWith(e))) {
					return [];
				}

				// Check include extensions
				if (includeExtensions.length > 0 && !includeExtensions.includes(ext)) {
					return [];
				}

				return filePath;
			})
		);
		return output.flat(1);
	}

	return getAllFilesRecursive(pathToFolder);
}
