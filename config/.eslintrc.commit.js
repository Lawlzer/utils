const path = require('path');

module.exports = {
	// @lawlzer/eslint
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'commit')],

	parserOptions: {
		tsconfigRootDir: path.resolve(process.cwd(), 'tsconfig.eslint.json'),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		project: [path.join(process.cwd(), 'tsconfig.eslint.json')],
		extraFileExtensions: ['.json'],
	},

	rules: {},
};
