import fs from 'fs-extra';
import path from 'path';

/**
 * Will recursively check the current directory -> one directly above (../), until it finds a package.json. Will return the absolute to the package.json, or null.
 */
export function findPackageJsonPathFromInside(filepath: string): string | null {
	const packageJsonPath = path.join(filepath, 'package.json');
	const exists = fs.existsSync(packageJsonPath);
	if (exists) return packageJsonPath;
	const nextPath = path.join(filepath, '..');
	if (nextPath === filepath) return null;
	return findPackageJsonPathFromInside(nextPath);
}
