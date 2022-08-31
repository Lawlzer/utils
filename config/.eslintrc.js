// We used to run ESLint and Prettier at the same time, but it was extremely slow.
// Now, ESLint and Prettier are ran separately -- They don't seem to interfere with each other.

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'simple-import-sort'], // simple-import-sort uses "eslint-plugin-simple-import-sort"
	rules: {
		strict: 2,

		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		// Prettier should handle all of this
		// 'semi': [2, 'always'],
		// 'quotes': [
		//     'error',
		//     'single'
		// ],
		// 'indent': 'off', // Don't error for JS code, it does weird things -- Only error for TS I guess
		// '@typescript-eslint/indent': ['error', 'tab'],
		// 'allowIndentationTabs': 'off',
		// 'no-mixed-spaces-and-tabs': ['error', 'always'],

		// 'no-extra-semi': 'off', // Prettier handles this anyways
		// '@typescript-eslint/no-extra-semi': 'off',

		// // When tabbing, it will automatically error if you have tabs/spaces (Handled by Prettier)
		// 'no-trailing-spaces': 'error',
		// // 'no-trailing-spaces': 'off',

		// // Show an error if something is implicitly defined as :any (this is bad!)
		// 'import/no-unresolved': 'error',

		// Empty interface
		'@typescript-eslint/no-empty-interface': 'off',

		// Disallow namespaces
		'@typescript-eslint/no-namespace': 'off',

		// No using functions without code inside them -- Simply unnecessary and annoying.
		'@typescript-eslint/no-empty-function': 'off',

		// If we specify "let unusedVariable = 'foo'", it will error - Again, simply unnecessary and annoying.
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',

		// MANUAL any -- If we are manually specifying "any", we have a reason for it.
		'no-explicit-any': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		'no-var-requires': 'off', // Forces you to use weird JS imports
		'@typescript-eslint/no-var-requires': 'off',

		// @ts-ignore  -- If we want to ignore an ESLint error, we have a reason for it.
		'@typescript-eslint/ban-ts-comment': 'off',

		// Will complain if you use "let" and don't reassign the value.
		'prefer-const': 'off',

		// Empty functions - Useful for "future" functions, or for when dev testing.
		'no-empty': 'off',

		// const notNull = maybeNull!
		'@typescript-eslint/no-non-null-assertion': 'off',

		// no-misused-promises are cool, but they require the "parserOptions.project" setting
		// '@typescript-eslint/no-misused-promises': [
		//     'error',
		//     {
		//         checksVoidReturn: false,
		//     },
		// ],
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: {},
		// project: ['./tsconfig.json', './src/**/*.ts'], // Disabled because it's EXTREMELY slow (~5x slower)
		extraFileExtensions: ['.json'],
	},

	env: {
		node: true,
	},

	settings: {},
};
