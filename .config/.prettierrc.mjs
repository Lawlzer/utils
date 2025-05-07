export default {
	trailingComma: 'es5',
	useTabs: true,
	semi: true,
	singleQuote: true,
	printWidth: 2000, // This is not a MAX, this is how long we *want* lines to be
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	singleAttributePerLine: false,
	plugins: ['prettier-plugin-packagejson'],
};
