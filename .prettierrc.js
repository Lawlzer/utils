module.exports = {
	trailingComma: 'es5',
	useTabs: true,
	semi: true,
	singleQuote: true,
	printWidth: 2000,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	singleAttributePerLine: false,
	plugins: [require('prettier-plugin-packagejson')],
};
