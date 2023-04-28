const path = require('path');

module.exports = {
	// @lawlzer/eslint
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'commit')],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		extraFileExtensions: ['.json'],
	},

	rules: {},
};
