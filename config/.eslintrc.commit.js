const path = require('path');

module.exports = {
	// @lawlzer/eslint
	extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'commit')],
};
