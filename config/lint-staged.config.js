// We don't want to use the global "npm run lint" because those run on EVERY file. We want to run on commited files, only.

module.exports = {
	'**/*.{ts,tsx,js,jsx,json,jsonc}': ['eslint --fix --ignore-path ./config/.eslintignore --config ./config/.eslintrc.js', 'prettier --write --config ./config/.prettierrc.js'],
};
