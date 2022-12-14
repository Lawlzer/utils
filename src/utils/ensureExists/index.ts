import util from 'util';

/**
 * @deprecated
 *
 * This function has been deprecated in favour of ensureFileExists and ensureDirectoryExists. Please use one of those two instead.
 */

export async function ensureExists(path: string, initialFileContent = '') {
	// eslint-disable-next-line @typescript-eslint/no-empty-function -- This is a deprecated function, so we don't want to do anything.
	util.deprecate(() => {}, 'ensureExists is deprecated. Use ensureFileExists or ensureDirectoryExists instead.')();
}
