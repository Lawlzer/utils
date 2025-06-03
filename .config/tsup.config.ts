// @ts-check
import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

const config: Options = {
	// Entry point
	entry: ['src/index.ts'],

	// Output formats - both ESM and CJS
	format: ['esm', 'cjs'],

	// Generate TypeScript declarations
	dts: {
		// Single .d.ts file for better tree-shaking
		resolve: true,
	},

	// Output directory
	outDir: 'dist',

	// Clean output directory before build
	clean: true,

	// Generate source maps for debugging
	sourcemap: true,

	// Minify the production build
	minify: process.env.NODE_ENV === 'production',

	// Target Node.js environments
	target: 'node16',

	// External dependencies that shouldn't be bundled
	external: ['fs', 'path', 'os', 'crypto', 'graceful-fs', 'fs-extra', 'dotenv', 'jsonc-parser', 'ms', 'picocolors', 'zod'],

	// Tree-shaking to remove unused code
	treeshake: true,

	// Keep names readable in development
	keepNames: true,

	// Output file naming
	outExtension({ format }) {
		return {
			js: format === 'esm' ? '.js' : '.cjs',
		};
	},
};

export default defineConfig(config);
