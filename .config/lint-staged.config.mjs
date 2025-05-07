// We don't want to use the global "npm run lint" because those run on EVERY file. We want to run on commited files, only.

export default {
	'**/*.{ts,tsx,js,jsx,json,jsonc}': ['npm run lint:eslint', 'npm run lint:prettier'],
};
