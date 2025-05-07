import { getFlagCli, getFlagEnv } from '../../dev-utils/flagStuff';
import { throwError } from '../throwError/index';

// Maybe these can be rewritten to remove the "as" casts.
// Initially I used overloads instead of generics, which did work without AS casts, but you cannot call a function with overloads, from an overloaded function. So that did not work.
// This also does not seem to work with Generics, but it may be my lack of knowledge.

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

	if (cliFlag !== undefined && envFlag !== undefined) {
		if (cliFlag !== envFlag) throwError(`Flag "${flagInput}" was found in both process.argv and process.env. This is not allowed.`);
		console.warn(`Flag "${flagInput}" was found in both process.argv and process.env, but they have the same value.`);
	}
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

	throwError(`flagTypeNecessary was most likely invalid: "${String(flagTypeNecessary)}"`);
}
