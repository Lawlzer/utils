module.exports = {
	'parser': '@typescript-eslint/parser',
	'plugins': ['@typescript-eslint'],
	'rules': {
		'semi': [2, 'always'],
		'quotes': [
			'error',
			'single'
		],
		'indent': 2,
		'no-trailing-spaces': 'off',
		'no-unused-vars': 'off',
		'no-extra-semi': 'off',
		'no-explicit-any': 'off',
		'no-var': 'off',
		'no-prototype-builtins': 'off',
		'no-useless-escape': 'off',
		'linebreak-style': 'off',

		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/no-trailing-spaces': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		'@typescript-eslint/no-var-requires': 'off',

		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				'checksVoidReturn': false
			},
		],
		'strict': 2,

		// 'no-console': 2 // Disables all console.logs(), ONLY UNCOMMENT FOR TESTING ESLINT.
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parserOptions': {
		'tsconfigRootDir': __dirname,
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
		'project': ['./tsconfig.json', './src/**/*.ts'],
	},

	'env': {
		'node': true
	},
};