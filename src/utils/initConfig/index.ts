import { getFlagCli, getFlagEnv } from '../../dev-utils/flagStuff';
/**
 * Will NOT initialize the nearest .env file (call @lawlzer/utils/initDotenv first!)
 *
 * Initialize the config, with requirements.
 *
 * E.g:
 *
 * const config = initConfig({
 *
 * field: { type: 'string' },
 *
 * field2: { type: 'number' },
 *
 * field3: { type: 'boolean' },
 *
 * }); // { field: 'string', field2: 123, field3: true }
 */
import { throwError } from '../throwError';

const types = ['boolean', 'number', 'string'] as const;
type RequirementTypes = (typeof types)[number];

type TypeScriptTypes = {
	boolean: boolean;
	number: number;
	string: string;
};

type WithMaybeUndefined<TType, TRequired extends boolean | undefined> = TRequired extends false ? TType | undefined : TType;

type Requirements = Record<
	string,
	{
		type: RequirementTypes;
		default?: TypeScriptTypes[RequirementTypes];
		required?: boolean;
	}
>;

// Note: The actual function implementation should include logic to handle the constraints applied by these types.
export function initConfig<T extends Requirements>(requirements: T): { [P in keyof T]: WithMaybeUndefined<TypeScriptTypes[T[P]['type']], T[P]['required']> } {
	const errors: string[] = [];
	const output: Record<keyof Requirements, boolean | number | string | undefined> = {};

	for (const [keyName, data] of Object.entries(requirements)) {
		const { type, default: defaultValue, required } = data;
		if (defaultValue !== undefined) output[keyName as any] = defaultValue;
		if (!types.includes(type)) errors.push(`The key "${keyName}" has an invalid type: "${type}". It must be one of: ${types.join(', ')}`);

		const valueEnv = getFlagEnv(keyName)?.value;
		const valueCli = getFlagCli(keyName)?.value;

		if (valueEnv !== undefined && valueCli !== undefined) {
			if (valueEnv !== valueCli) {
				errors.push(`ENV and CLI flags for key "${keyName}" are different: ${valueEnv} !== ${valueCli}. Using CLI flag.`);
				continue;
			}
			console.warn(`ENV and CLI flags for key "${keyName}" are the same: ${valueEnv} === ${valueCli}. We will not throw an error, but this should probably be fixed.`);
		}
		const value = valueEnv ?? valueCli ?? defaultValue;
		if (value === undefined) {
			if (required === true) errors.push(`Missing ENV flag: ${keyName}`);
			else output[keyName as any] = undefined;
			continue;
		}

		if (type === 'string') {
			if (typeof value !== 'string') errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
			output[keyName] = value;
			continue;
		}

		if (type === 'number') {
			const valueParsed = parseFloat(value as any);
			if (isNaN(valueParsed)) errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
			output[keyName] = valueParsed;
			continue;
		}

		if (type === 'boolean') {
			let valueParsed: boolean | undefined = undefined;
			if ((typeof value === 'string' && value.toLowerCase() === 'true') || value === true) valueParsed = true;
			if ((typeof value === 'string' && value.toLowerCase() === 'false') || value === 'false') valueParsed = false;
			// if (value === '') valueParsed = undefined; // innately handled under

			if (valueParsed === undefined && value !== undefined) {
				errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} `);
				continue;
			}

			output[keyName] = valueParsed;
			continue;
		}

		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		errors.push(`Invalid type for key: ${keyName}. Value: ${value}. Expected typeof ${type} ype}`);
	}

	if (errors.length > 0) throwError(`\n${errors.join('\n')}`);

	return output as any;
}
