import { throwError } from '../throwError/index';

// Maybe these can be rewritten to remove the "as" casts.
// Initially I used overloads instead of generics, which did work without AS casts, but you cannot call a function with overloads, from an overloaded function. So that did not work.
// This also does not seem to work with Generics, but it may be my lack of knowledge.

interface FlagData {
	original: string;
	value: string;
}
function getFlagCli(flagInput: string): FlagData | undefined {
	const flagToFind = flagInput.toLowerCase();
	const argv = process.argv.slice(2); // Exclude the first two arguments which are node and script path.

	for (const argCurrent of argv) {
		let arg = argCurrent.toLowerCase();
		if (arg.startsWith('-')) arg = arg.replace('-', '');
		if (arg.startsWith('-')) arg = arg.replace('-', '');

		if (arg.startsWith(flagToFind)) {
			arg = arg.replace(flagToFind, '');
			if (arg.startsWith('=') && arg.length > 1) arg = arg.replace('=', ''); // && arg.length > 1, because if we have a flag that ends with an equal sign, we don't want to remove it

			return { original: argCurrent, value: arg };
		}
	}
	return undefined;
}

function getFlagEnv(flagInput: string): FlagData | undefined {
	const flagToFind = flagInput.toLowerCase();

	for (const [key, value] of Object.entries(process.env)) {
		if (typeof value !== 'string') {
			console.warn(`getFlagEnv found a non-string value: ${value} for the flag: ${key}`);
			continue;
		}

		if (key.toLowerCase() === flagToFind) return { original: `${key}=${value}`, value: value }; // this could maybe be handled cleaner?
	}

	return undefined;
}

/**
 * Find a CLI flag, and return the result.
 *
 * Capitalization does not matter (hello_world is the same as HELLO_WORLD)
 *
 * Will also read process.env variables.
 */
export function getFlag(flagInput: string, flagTypeNecessary: 'string'): string | undefined;
export function getFlag(flagInput: string, flagTypeNecessary: 'number'): number | undefined;
export function getFlag(flagInput: string, flagTypeNecessary: 'boolean'): boolean | undefined;
export function getFlag(flagInput: string, flagTypeNecessary: 'boolean' | 'number' | 'string'): boolean | number | string | undefined {
	if (typeof flagTypeNecessary !== 'string') throwError('Was not passed in a flagTypeNecessary.');
	const cliFlag = getFlagCli(flagInput);
	const envFlag = getFlagEnv(flagInput);

	if (cliFlag !== undefined && envFlag !== undefined) throwError(`Flag "${flagInput}" was found in both process.argv and process.env. This is not allowed.`);
	if (cliFlag === undefined && envFlag === undefined) return undefined;
	const flag = cliFlag ?? envFlag;
	if (!flag) throwError('...?');

	if (flagTypeNecessary === 'boolean') {
		if (flag.value.toLowerCase() === 'true' || flag.value === '') return true;
		if (flag.value.toLowerCase() === 'false') return false;
		throwError(`Flag "${flagInput}" is supposed to be a boolean, but has a value of '${flag.value}'.`);
	}

	if (flagTypeNecessary === 'string') {
		return flag.value;
	}

	if (flagTypeNecessary === 'number') {
		if (flag.value === '') throwError(`Flag "${flagInput}" is supposed to be a number, but has a value of '${flag.value}'.`);
		const valueParsed = parseFloat(flag.value);
		if (isNaN(valueParsed)) throwError(`Flag "${flagInput}" is supposed to be a number, but has a value of '${flag.value}' when parseFloat is called on it.`);
		return valueParsed;
	}

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	throwError(`flagTypeNecessary was most likely invalid: "${flagTypeNecessary}"`);
}
