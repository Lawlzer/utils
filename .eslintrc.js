module.exports = {
	'parserOptions': {
		'tsconfigRootDir': __dirname,
		'ecmaVersion': 11,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'rules': {
		'semi': [2, 'always'],
		'quotes': [
			'error',
			'single'
		],
		'indent': [
			'error',
			'tab'
		]
	},
	'env': {
		'node': true
	},
	'parser': '@typescript-eslint/parser',
};