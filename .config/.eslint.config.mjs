// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const commit = process.env.LINT_STAGED_COMMIT === 'true';

export default tseslint.config(
	{
		ignores: ['node_modules', 'logs', 'routeTypes', 'caches', 'cache', 'temp', 'tmp', 'debug', 'out', 'output', 'dist', 'lib', 'build', 'data', '.next', 'volume', 'volumes', '.vscode/**', 'package.json', 'package-lock.json', 'tsconfig.json', 'tsconfig.eslint.json'],
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'unused-imports': unusedImports,
			'simple-import-sort': simpleImportSort,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.eslint.json',
			},
		},
		rules: {
			// Misc
			'@typescript-eslint/no-unused-vars': commit
				? [
						'error',
						{
							argsIgnorePattern: '^_|^error$|^errors$',
							varsIgnorePattern: '^_|^error$|^errors$',
							caughtErrorsIgnorePattern: '^_|^error$|^errors$',
							destructuredArrayIgnorePattern: '^_',
							ignoreRestSiblings: true,
						},
					]
				: ['off'],

			// Import sorting - automatically sorts imports
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						// Node.js builtins prefixed with `node:`
						['^node:'],
						// Packages starting with @, then other packages
						['^@?\\w'],
						// Internal packages (your own @company packages)
						['^@company'],
						// Side effect imports
						['^\\u0000'],
						// Parent imports. Put `..` last
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						// Other relative imports. Put same-folder imports and `.` last
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						// Style imports
						['^.+\\.s?css$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',

			// Unused imports configuration - automatically removes unused imports when commit=true
			'unused-imports/no-unused-imports': commit ? ['error'] : ['off'], // Auto-fix removes unused imports
			'unused-imports/no-unused-vars': ['off'], // We'll let the TypeScript rule handle unused variables

			'@typescript-eslint/adjacent-overload-signatures': ['error'],
			'@typescript-eslint/array-type': ['error'],
			'@typescript-eslint/await-thenable': ['off'],
			'@typescript-eslint/ban-ts-comment': ['off'], // if we have a comment, it's for a reason
			'@typescript-eslint/ban-tslint-comment': ['error'],
			'@typescript-eslint/class-literal-property-style': ['error'],
			'@typescript-eslint/consistent-generic-constructors': ['error'],
			'@typescript-eslint/consistent-indexed-object-style': commit ? ['error'] : ['off'],

			'@typescript-eslint/consistent-type-assertions': [
				// "<foo>" vs "as foo"
				'error',
				{
					assertionStyle: 'as',
				},
			],

			'@typescript-eslint/consistent-type-definitions': ['error'],
			'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
			'@typescript-eslint/consistent-type-imports': ['error'],
			'@typescript-eslint/default-param-last': ['error'],
			'@typescript-eslint/dot-notation': ['error'],
			'@typescript-eslint/explicit-member-accessibility': ['error'],
			'@typescript-eslint/init-declarations': ['off'],
			'@typescript-eslint/member-ordering': ['error'],
			'@typescript-eslint/method-signature-style': ['error'],
			'@typescript-eslint/naming-convention': ['off'],
			'@typescript-eslint/no-array-constructor': ['error'],
			'@typescript-eslint/no-array-delete': ['error'],
			'@typescript-eslint/no-base-to-string': ['error'],
			'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
			'@typescript-eslint/no-confusing-void-expression': ['error'],
			'@typescript-eslint/no-dupe-class-members': ['error'],
			'@typescript-eslint/no-duplicate-imports': ['off'],
			'@typescript-eslint/no-duplicate-type-constituents': ['error'],
			'@typescript-eslint/no-dynamic-delete': ['error'],
			'@typescript-eslint/no-empty': ['off'],
			'@typescript-eslint/no-empty-function': ['off'], // useful for templating
			'@typescript-eslint/no-empty-interface': ['off'], // useful for templating
			'@typescript-eslint/no-empty-object-type': ['off'], // empty interfaces are useful for templating
			'@typescript-eslint/no-explicit-any': ['off'], // if we have an any, it's for a reason
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-extraneous-class': ['off'], // Classes with only static methods are useful for organization
			'@typescript-eslint/no-floating-promises': [
				'error',
				{
					ignoreVoid: true,
					ignoreIIFE: true,
				},
			],

			'@typescript-eslint/no-for-in-array': ['error'],
			'@typescript-eslint/no-implicit-any-catch': ['off'],
			'@typescript-eslint/no-implied-eval': ['error'],
			'@typescript-eslint/no-import-type-side-effects': ['error'],
			'@typescript-eslint/no-inferrable-types': ['error'],
			'@typescript-eslint/no-invalid-this': ['error'],
			'@typescript-eslint/no-invalid-void-type': ['error'],
			'@typescript-eslint/no-loop-func': ['error'],
			'@typescript-eslint/no-loss-of-precision': ['error'],
			'@typescript-eslint/no-magic-numbers': ['off'],
			'@typescript-eslint/no-meaningless-void-operator': ['error'],
			'@typescript-eslint/no-misused-new': ['error'],
			'@typescript-eslint/no-misused-promises': ['error'],
			'@typescript-eslint/no-mixed-enums': ['error'],
			'@typescript-eslint/no-namespace': commit ? ['error'] : ['off'],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['off'],
			'@typescript-eslint/no-parameter-properties': ['off'],
			'@typescript-eslint/no-redeclare': ['error'],
			'@typescript-eslint/no-redundant-type-constituents': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-shadow': ['error'],
			'@typescript-eslint/no-this-alias': ['error'],
			'@typescript-eslint/no-type-alias': ['off'],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
			'@typescript-eslint/no-unnecessary-condition': ['off'],
			'@typescript-eslint/no-unnecessary-qualifier': ['error'],
			'@typescript-eslint/no-unnecessary-type-arguments': ['error'],
			'@typescript-eslint/no-unnecessary-type-assertion': ['error'],
			'@typescript-eslint/no-unsafe-argument': ['off'],
			'@typescript-eslint/no-unsafe-assignment': ['off'], // it's any, go away
			'@typescript-eslint/no-unsafe-call': ['off'], // it's any, let us do whatever we want
			'@typescript-eslint/no-unsafe-enum-comparison': ['error'],
			'@typescript-eslint/no-unsafe-function-type': ['error'],
			'@typescript-eslint/no-unsafe-member-access': ['off'], // no (any).foo -- because it's any. it's any, let us do what we want.
			'@typescript-eslint/no-unsafe-return': ['error'],
			'@typescript-eslint/no-unsafe-unary-minus': ['error'],
			'@typescript-eslint/no-unused-expressions': ['error'],
			'@typescript-eslint/no-use-before-define': ['error'],
			'@typescript-eslint/no-useless-constructor': ['off'],
			'@typescript-eslint/no-useless-empty-export': ['error'],
			'@typescript-eslint/no-var-requires': commit ? ['error'] : ['off'],
			'@typescript-eslint/no-wrapper-object-types': ['error'],
			'@typescript-eslint/non-nullable-type-assertion-style': ['error'],
			'@typescript-eslint/only-throw-error': ['off'],
			'@typescript-eslint/parameter-properties': ['error'],
			'@typescript-eslint/prefer-as-const': ['error'],
			'@typescript-eslint/prefer-const': ['off'],
			'@typescript-eslint/prefer-enum-initializers': ['error'],
			'@typescript-eslint/prefer-find': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/prefer-function-type': ['error'],
			'@typescript-eslint/prefer-includes': ['error'],
			'@typescript-eslint/prefer-literal-enum-member': ['error'],
			'@typescript-eslint/prefer-namespace-keyword': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['off'], // Technically should be on, but it's unnecessary and just annoying for AI...
			'@typescript-eslint/prefer-optional-chain': ['error'],
			'@typescript-eslint/prefer-promise-reject-errors': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],
			'@typescript-eslint/prefer-readonly-parameter-types': ['off'],
			'@typescript-eslint/prefer-reduce-type-parameter': ['error'],
			'@typescript-eslint/prefer-regexp-exec': ['error'],
			'@typescript-eslint/prefer-return-this-type': ['error'],
			'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
			'@typescript-eslint/prefer-ts-expect-error': ['error'],
			'@typescript-eslint/promise-function-async': ['error'],
			'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
			'@typescript-eslint/require-await': ['off'], // If a function is not REQUIRED to be async, it must not be async. just annoying.
			'@typescript-eslint/restrict-plus-operands': ['error'],
			'@typescript-eslint/restrict-template-expressions': ['error', { allowAny: true, allowNumber: true, allowBoolean: true, allowNullish: true }], // Seems to be same as above, but for template literals
			'@typescript-eslint/return-await': ['error'],
			'@typescript-eslint/sort-type-constituents': ['error'],
			'@typescript-eslint/sort-type-union-intersection-members': ['off'], // Renamed to "sort-type-constituents"

			'@typescript-eslint/strict-boolean-expressions': [
				'error',
				{
					allowString: true, // Disables `if (myString is truthy)`
					allowNumber: false, // Disables `if (myNumber is truthy)`
					allowNullableObject: true, // Enables `if (myObject)` for nullable objects
					allowNullableBoolean: true, // Enables `if (myNullableBool)` for nullable booleans
					allowNullableString: false, // Disables `if (myNullableString)`
					allowNullableNumber: false, // Disables `if (myNullableNumber)`
					allowNullableEnum: false, // Disables `if (myNullableEnum)`
					allowAny: true, // Enables `if (my: any)`
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				},
			],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],
			'@typescript-eslint/triple-slash-reference': ['error'],
			'@typescript-eslint/typedef': ['error'],
			'@typescript-eslint/unified-signatures': ['error'],
			'constructor-super': ['off'],
			'getter-return': ['off'],
			'no-array-constructor': ['off'],
			'no-class-assign': ['off'],
			'no-console': ['error', { allow: ['info', 'warn', 'error', 'debug', 'trace', commit ? 'N/A this is ignored' : 'log'] }],
			'no-const-assign': ['off'],
			'no-dupe-args': ['off'],
			'no-dupe-class-members': ['off'],
			'no-dupe-keys': ['off'],
			'no-empty-function': ['off'],
			'no-func-assign': ['off'],
			'no-implied-eval': ['off'],
			'no-import-assign': ['off'],
			'no-new-native-nonconstructor': ['off'],
			'no-new-symbol': ['off'],
			'no-obj-calls': ['off'],
			'no-redeclare': ['off'],
			'no-setter-return': ['off'],
			'no-this-before-super': ['off'],
			'no-throw-literal': ['off'],
			'no-undef': ['off'],
			'no-unreachable': ['off'],
			'no-unsafe-negation': ['off'],
			'no-unused-expressions': ['off'],
			'no-unused-vars': ['off'],
			'no-var': commit ? ['error'] : ['off'],
			'no-with': ['off'],
			'prefer-const': ['error'],
			'prefer-promise-reject-errors': ['off'],
			'prefer-rest-params': ['error'],
			'prefer-spread': ['error'],
			'require-await': ['off'],

			// Enhanced general rules for better code quality
			'arrow-body-style': ['error', 'as-needed'],
			curly: ['error', 'multi-line', 'consistent'],
			eqeqeq: ['error', 'always', { null: 'ignore' }],
			'no-constant-binary-expression': 'error',
			'no-constructor-return': 'error',
			'no-lonely-if': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
			'no-unneeded-ternary': ['error', { defaultAssignment: false }],
			'operator-assignment': ['error', 'always'],
			'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
			'prefer-destructuring': [
				'error',
				{
					VariableDeclarator: { array: false, object: true },
					AssignmentExpression: { array: false, object: false },
				},
			],
			'prefer-template': 'error',
			'require-atomic-updates': 'error',
			yoda: ['error', 'never'],

			// Experimental, may change
			'@typescript-eslint/no-duplicate-enum-values': ['error'], // experimental
			'@typescript-eslint/no-unnecessary-type-constraint': ['error'], // experimental
			'@typescript-eslint/no-unsafe-declaration-merging': ['error'], // experimental
			'@typescript-eslint/unbound-method': ['error'], // experimental
		},
	},

	{
		files: ['**/*.test.ts', '**/*.test.tsx'],
		rules: {
			'@typescript-eslint/no-unsafe-call': ['off'],
			'@typescript-eslint/no-confusing-void-expression': ['off'],
			'react/jsx-no-bind': ['off'], // More flexibility in tests
		},
	},

	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	},

	// IMPORTANT: prettier config must be last to disable all conflicting rules
	// This prevents ESLint and Prettier from fighting over formatting
	prettierConfig
);
