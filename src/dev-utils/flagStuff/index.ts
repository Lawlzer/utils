export interface FlagData {
	original: string;
	value: string;
}

export function getFlagCli(flagInput: string): FlagData | undefined {
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

export function getFlagEnv(flagInput: string): FlagData | undefined {
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
