const path = require('path');

module.exports = {
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'main')],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		extraFileExtensions: ['.json'],
	},

	rules: {},
};
