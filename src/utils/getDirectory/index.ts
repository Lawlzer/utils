import { dirname, extname } from 'path';

/**
 * Return the directory path of a path. Will "ignore" a file at the end, and return the directory path
 */
export function getDirectory(path: string) {
	const extension = extname(path);
	if (extension) path = dirname(path);
	return path;
}
