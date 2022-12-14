// This file will run on commit. It will also run on "npm run pre-commit".
// This will *only look at commited files* :)

module.exports = {
	'**/*.{ts,tsx,js,jsx,json,jsonc}': ['npm run lint:eslint:commit --', 'npm run lint:prettier --', 'jest --bail --findRelatedTests --pass-with-no-tests --config=./config/jest.config.ts'],
};
