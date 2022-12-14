// We used to run ESLint and Prettier at the same time, but it was extremely slow.
// Now, ESLint and Prettier are ran separately -- They don't seem to interfere with each other.

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'simple-import-sort'], // simple-import-sort uses "eslint-plugin-simple-import-sort"
	rules: {
		strict: 2,

		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		// This will disable variables and types from sharing a name
		// I don't know what else it does
		'no-redeclare': 'off', // The base one can cause errors with TypeScript
		'@typescript-eslint/no-redeclare': 'error',

		// Overloads must be ordered from most -> least specific
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// Require T[], instead of Array<T>
		'@typescript-eslint/array-type': 'error',

		// Disallow the bad default types, like "String", "Boolean", "Number", "Function", etc
		'@typescript-eslint/ban-types': 'error',

		// Require records, instead of interfaces, or vice versa
		// '@typescript-eslint/consistent-indexed-object-style': 'error',

		// Disallow interfaces -> only use types, or always use interfaces when possible
		// '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

		// Require import type { ... } from '...' when possible
		// This fixes bugs with types that are removed post-build
		'@typescript-eslint/consistent-type-imports': 'error',

		// Require functions to explicitly define the return types
		// '@typescript-eslint/explicit-module-boundary-types': 'error',

		// Disallow null assertion next to math or functions ( if (a! + 2) )
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',

		// Don't allow var!!!!!.maybeExists
		'@typescript-eslint/no-extra-non-null-assertion': 'error',

		// ? Something about classes
		'@typescript-eslint/no-extraneous-class': 'error',

		// Don't use explicit types when they can be inferred
		// '@typescript-eslint/no-inferrable-types': 'error',

		// Don't mix up "new" and "constructor" keywords
		'@typescript-eslint/no-misused-new': 'error',

		// Don't use ! and ?? together a! ?? b
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

		// Don't use ? then !, a?.b!
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// Use imports, not require
		// '@typescript-eslint/no-require-imports': 'error',

		// Don't assign "this" to variables
		// '@typescript-eslint/no-this-alias': 'error',

		// Don't extend *any* types (explicit <T> already extends any)
		// '@typescript-eslint/no-unnecessary-type-constraint': 'error',

		// Don't define a type twice, prefer const instead
		// let foo = <'bar'>'bar';
		'@typescript-eslint/prefer-as-const': 'error',

		// Enums must have an explicit value, not implicit
		'@typescript-eslint/prefer-enum-initializers': 'error',

		// Don't use for (let i = ) loops, use for (const i of ) instead
		// UNLESS the index is used -- if the index is used, it won't error.
		'@typescript-eslint/prefer-for-of': 'error',

		// Require more explicit function declarations (function foo(example: () => number): number {
		'@typescript-eslint/prefer-function-type': 'error',

		// Enums must use literal values
		// Enums use their own scope, which can make the result unexpected
		'@typescript-eslint/prefer-literal-enum-member': 'error',

		// Use @ts-expect-error instead of @ts-ignore
		'@typescript-eslint/prefer-ts-expect-error': 'error',

		// These require "project" settings (which make ESLint extremely slow)
		// '@typescript-eslint/no-confusing-void-expression': 'error',
		// '@typescript-eslint/no-meaningless-void-operator': 'error',
		// '@typescript-eslint/no-misused-promises': 'error',
		// '@typescript-eslint/no-redundant-type-constituents': 'error',
		// '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		// '@typescript-eslint/no-unnecessary-type-arguments': 'error',
		// '@typescript-eslint/no-unnecessary-type-assertion': 'error',
		// '@typescript-eslint/non-nullable-type-assertion-style': 'error',
		// '@typescript-eslint/prefer-includes': 'error',
		// '@typescript-eslint/prefer-readonly': 'error',
		// '@typescript-eslint/prefer-reduce-type-parameter': 'error',
		// '@typescript-eslint/prefer-string-starts-ends-with': 'error',
		// '@typescript-eslint/promise-function-async': 'error',
		// '@typescript-eslint/require-array-sort-compare': 'error',
		// '@typescript-eslint/restrict-plus-operands': 'error',
		// '@typescript-eslint/switch-exhaustiveness-check': 'error',
		// '@typescript-eslint/unbound-method': 'error',

		// '@typescript-eslint/no-misused-promises': [
		//     'error',
		//     {
		//         checksVoidReturn: false,
		//     },
		// ],

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

		// Disallow unused variables -- Very annoying
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',

		// MANUAL any -- If we are manually specifying "any", we have a reason for it.
		'no-explicit-any': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		'no-var-requires': 'off', // Forces you to use weird JS imports
		'@typescript-eslint/no-var-requires': 'off',

		// @ts-expect-error  -- If we want to ignore an ESLint error, we have a reason for it.
		'@typescript-eslint/ban-ts-comment': 'off',

		// Will complain if you use "let" and don't reassign the value.
		'prefer-const': 'off',

		// Empty functions - Useful for "future" functions, or for when dev testing.
		'no-empty': 'off',

		// const notNull = maybeNull!
		'@typescript-eslint/no-non-null-assertion': 'off',

		// Disable ALL var usage
		'no-var': 'off',
		'@typescript/no-var': 'off',
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: {},
		// project: ['../tsconfig.json', '../src/**/*.ts', '../test-utils/**/*.ts'], // Disabled because it's EXTREMELY slow (~5x slower)
		extraFileExtensions: ['.json'],
		// ts: '@typescript-eslint/parser',
		// js: '@typescript-eslint/parser',
		// '<template>': 'espree',
	},

	env: {
		node: true,
	},

	settings: {},
};
