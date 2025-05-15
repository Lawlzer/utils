import esbuild from 'esbuild';

async function build(name, options) {
	const path = `${name}.js`;
	console.info(`Building ${name}...`);

	if (process.argv.includes('--watch')) {
		const ctx = await esbuild.context({
			outfile: `./dist/${path}`,
			bundle: true,
			logLevel: 'info',
			sourcemap: true,
			...options,
			minify: false,
		});
		await ctx.watch();
	} else {
		return esbuild.build({
			outfile: `./dist/${path}`,
			bundle: true,
			...options,
		});
	}
}

async function buildAll() {
	const externalPackages = ['fs', 'path', 'os', 'crypto', 'graceful-fs', 'fs-extra', 'dotenv'];
	return Promise.all([
		build('index', {
			entryPoints: ['src/index.js'],
			platform: 'node',
			minify: true,
			target: ['es6'],
			external: externalPackages,
			format: 'esm',
		}),
		build('esm', {
			entryPoints: ['src/index.js'],
			platform: 'node',
			external: externalPackages,
			format: 'esm',
		}),
		build('cjs', {
			entryPoints: ['src/index.js'],
			target: ['node10.4'],
			platform: 'node',
			external: externalPackages,
			format: 'cjs',
		}),
	]);
}

void buildAll();
