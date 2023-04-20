import { dirname, extname } from 'path';

/**
 * Return the directory path of a path. Will "ignore" a file at the end, and return the directory path
 *
 * CAREFUL if the path has periods! E.g /path/to/file.txt will use the period to return /path/to
 */
export function getDirectory(path: string) {
	const extension = extname(path);
	if (extension) path = dirname(path);
	return path;
}
