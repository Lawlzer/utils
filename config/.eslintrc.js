const path = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'main')], // Todo fix
	root: true,

	plugins: [
		//
	],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		project: [path.join(process.cwd(), 'tsconfig.eslint.json')],
		extraFileExtensions: ['.json'],
	},

	env: {
		node: true,
		jest: true,
	},

	rules: {
		'@typescript-eslint/unbound-method': 'off', // Experimental
	},

	settings: {},
};
