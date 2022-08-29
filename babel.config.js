module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
	plugins: [
		[
			'babel-plugin-root-import',
			{
				paths: [
					{
						rootPathSuffix: './src',
						rootPathPrefix: '~/',
					},
				],
			},
		],
		// [
		// 	'module-resolver',
		// 	{
		// 		root: ['.'],
		// 		alias: {
		// 			'~': './dist',
		// 			'@test-utils': './test-utils',
		// 		},
		// 	},
		// ],
	],
};
