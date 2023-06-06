const path = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'commit')], // Todo fix
	root: true,

	plugins: [
		//
	],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		project: [path.join(process.cwd(), 'tsconfig.json')],
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
