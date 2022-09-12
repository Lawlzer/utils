import { throwError } from '~/utils/throwError';

/**
 * Find a CLI flag, and return the result.
 *
 * Will always return a string, or undefined. WILL ONLY PARSE BOOLEANS, will NOT parse --value=12.
 */
export function getFlag(flagInput: string): string | boolean | undefined {
	// The flags are not truly "flags", they are simple argv.  For example, "--foo=foo" will be "--foo=foo" as an argv.
	// So we will find the relevant flag (either find "foo", "-foo", or "--foo"), and return the value (or, if no value, true)

	// --foo -> true
	// --foo=foo -> foo
	// -foo=foo -> foo
	// foo -> true
	// foo=false -> false
	// foo-true = true

	// --flag | -flag | flag
	const flagSimple = process.argv.find((arg) => arg === flagInput || arg === `-${flagInput}` || arg === `--${flagInput}`);
	if (flagSimple) return true;

	// --flag=value | -flag=value || flag=value
	const flagWhole = process.argv.find((arg) => arg.startsWith(`--${flagInput}=`) || arg.startsWith(`-${flagInput}=`) || arg.startsWith(`${flagInput}=`));
	if (!flagWhole) return undefined; // flag not found

	const flagValue = flagWhole.split(flagInput + '=')[1];
	if (!flagValue) return true; // --flag

	if (flagValue === 'true') return true; // --flag=true
	if (flagValue === 'false') return false; // --flag=false

	return flagValue ? flagValue : true;
}
