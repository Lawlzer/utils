/**
 * Find a CLI flag, and return the result.
 *
 * Will always return a string, or undefined. WILL ONLY PARSE BOOLEANS, will NOT parse --value=12.
 */
export function getFlag(flagInput: string): string | true | false | undefined {
	// The flags are not truly "flags", they are simple argv.  For example, "--foo=foo" will be "--foo=foo" as an argv.
	// So we will find the relevant flag (either find "foo", "-foo", or "--foo"), and return the value (or, if no value, true)

	// --foo=foo -> foo
	// -foo=foo ->s foo
	// foo -> true
	// foo=false -> false
	// foo-true = true

	const flagFound = process.argv.find((arg) => arg.startsWith(`--${flagInput}=`) || arg.startsWith(`-${flagInput}=`) || arg === flagInput);
	if (!flagFound) return undefined;

	const flagValue = flagFound.split(flagInput + '=')[1] || true;
	if (flagValue === 'true') return true;
	if (flagValue === 'false') return false;
	return flagValue ? flagValue : true;
}
