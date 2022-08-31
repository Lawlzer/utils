require('prettier'); // This import does nothing -- However, Prettier requires prettier to be a dependency, but if we run this without Prettier we get a very weird error. This makes the error more verbose.

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
