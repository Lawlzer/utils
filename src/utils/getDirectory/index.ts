import { dirname, extname } from 'path';

/**
 * Return the directory path of a path. Will "remove" files (if there is a file extension)
 */
export function getDirectory(path: string) {
	const extension = extname(path);
	if (extension) path = dirname(path);
	return path;
}
