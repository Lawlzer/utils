import { defineConfig } from 'tsup';

export default defineConfig([
	// ESM build
	{
		entry: { esm: 'src/index.ts' },
		format: 'esm',
		dts: false,
		clean: true,
		sourcemap: true,
		minify: false,
		splitting: false,
		external: ['fs', 'path', 'os', 'crypto', 'graceful-fs', 'fs-extra', 'dotenv'],
		platform: 'node',
		target: 'node14',
		tsconfig: 'tsconfig.build.json',
		outExtension: () => ({ js: '.js' }),
	},
	// CJS build
	{
		entry: { cjs: 'src/index.ts' },
		format: 'cjs',
		dts: false,
		clean: false, // Don't clean on second build
		sourcemap: true,
		minify: false,
		splitting: false,
		external: ['fs', 'path', 'os', 'crypto', 'graceful-fs', 'fs-extra', 'dotenv'],
		platform: 'node',
		target: 'node14',
		tsconfig: 'tsconfig.build.json',
		outExtension: () => ({ js: '.js' }),
	},
]);
