// Run linting only on committed files, not the entire codebase

export default {
	'**/*.{ts,tsx,js,jsx}': ['npm run lint:eslint:commit', 'npm run lint:prettier:commit'],
	'**/*.{json,jsonc,md,mdx}': ['npm run lint:prettier:commit'],
};
