// This is for removing unnecessary imports, empty functions, etc -- things we don't want to push, but will want temporarily.
// This should not be used for general development, as it's quite annoying to work with.
// This file is ONLY ran from the pre-commit hook (lint-staged.config.js)

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'simple-import-sort', // eslint-plugin-simple-import-sort
		'import', // eslint-plugin-import
		'unused-imports', // eslint-plugin-unused-imports
	],
	rules: {
		strict: 2,
		// remove unnecessary imports
		'unused-imports/no-unused-imports': 'error',

		// sort the imports
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',

		// Empty interface
		'@typescript-eslint/no-empty-interface': 'error',

		// No using functions without code inside them
		'@typescript-eslint/no-empty-function': 'error',

		// // Sadly, this also removes variables from functions, so we can't use potential generics.
		// 'no-unused-vars': 'error',
		// '@typescript-eslint/no-unused-vars': 'error',

		// Will complain if you use "let" and don't reassign the value.
		'prefer-const': 'error',

		// Empty functions - Useful for "future" functions, or for when dev testing.
		'no-empty': 'error',

		// disallow console.log, but allow other console methods (console.info, console.error, etc)
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error', 'debug', 'trace'],
			},
		],
	},
	extends: ['./.eslintrc.js'], // Extend the base config
};
