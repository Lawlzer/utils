import dotenv from 'dotenv';
import fs from 'fs-extra';
import path from 'path';

import { throwError } from '../throwError';

/**
 * Will initialize the nearest .env file
 */

export function initDotenv() {
	const environmentName = process.env.NODE_ENV;
	if (environmentName !== 'production' && environmentName !== 'development') throwError('process.env.NODE_ENV is not "development" or "production".');

	const allowedDotenvs: string[] = ['.env'];
	if (environmentName === 'development') allowedDotenvs.push('.env.development');
	if (environmentName === 'production') allowedDotenvs.push('.env.production');

	let directory = process.cwd();
	let lastDirectory;

	while (lastDirectory !== directory) {
		lastDirectory = directory;
		for (const dotenvName of allowedDotenvs) {
			const dotenvPath = path.join(directory, dotenvName);

			const fileExists = fs.existsSync(dotenvPath);
			if (fileExists) {
				dotenv.config({ path: dotenvPath });
				return console.info(`We are using the .env file ${dotenvName} in the directory ${directory}`);
			}
		}
		directory = path.dirname(directory); // Go back up one directory
	}
	throwError(`No .env file could be found, starting at ${process.cwd()} and going up the directory tree. We looked for the dotenvs: ${allowedDotenvs.join(', ')}`);
}
