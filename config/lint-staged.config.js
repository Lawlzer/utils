/*
 * Husky will run "npm run pre-commit" on commit
 * This file is ran from "npm run pre-commit"
 */

module.exports = {
	'**/*.{ts,tsx,js,jsx,json,jsonc}': [
		//
		'jest --bail --findRelatedTests --pass-with-no-tests --config=./config/jest.config.ts',
		'npm run lint:eslint:commit --',
		'npm run lint:prettier --',
	],
};
