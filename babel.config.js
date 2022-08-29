module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
	plugins: [
		['@babel/plugin-transform-runtime'], // Fixes a regeneratorRuntime issue
		// ['@babel/preset-env', { targets: { node: 'current' } }],
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'~': './dist',
					// '@test-utils': './test-utils',
					'@test-utils': './test-utils',
				},
			},
		],
	],
};
