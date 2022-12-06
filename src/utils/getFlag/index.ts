import { throwError } from '~/utils/throwError';

/**
 * Find a CLI flag, and return the result.
 *
 * Will always return a string, or undefined. WILL ONLY PARSE BOOLEANS, will NOT parse --value=12.
 *
 * Will also read process.env variables.
 */
export function getFlag(flagInput: string): string | boolean | undefined {
	const flagLowercase = flagInput.toLowerCase();
	// The flags are not truly "flags", they are simple argv.  For example, "--foo=foo" will be "--foo=foo" as an argv.
	// So we will find the relevant flag (either find "foo", "-foo", or "--foo"), and return the value (or, if no value, true)

	// Handle .env variables
	// .env variables are always lowercase, so capitalization does not matter whatsoever.
	const envValue = process.env[flagLowercase];
	if (envValue !== undefined) return envValue;

	// Handle process.argv (CLI) variables
	// Find the flag we are referencing here
	let flag = process.argv.find((argv) => {
		if (!argv) return false; // if the argv have been deleted, or set to null/undefined

		let arg = argv.toLowerCase();
		if (arg.startsWith('-')) arg = arg.replace('-', '');
		if (arg.startsWith('-')) arg = arg.replace('-', '');

		if (arg.toLowerCase().startsWith(`${flagLowercase}=`) || arg === flagLowercase) return true;
		return false;
	});

	if (!flag) return undefined;

	// flagValue should be everything after the first =
	// If there is no =, it should be true
	// We should assume there may be multiple =
	// For example, --foo=bar=baz should be bar=baz
	if (flag === `${flagLowercase}`) return true; // --foo
	if (flag === `-${flagLowercase}`) return true; // -foo
	if (flag === `--${flagLowercase}`) return true; // --foo

	const equalsIndex = flag.indexOf('=');

	const flagValue = flag.slice(equalsIndex + 1);

	if (flagValue === 'true') return true;
	if (flagValue === 'false') return false;

	return flagValue;
}

process.argv[2] = '-test2';
const flag = getFlag('test2');
console.log(flag);
