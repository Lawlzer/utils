import { deepCompare } from '@lawlzer/utils';

async function main() {
	console.log('ESM Test: Starting...');
	try {
		console.log('Calling deepCompare...');
		const result = deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 });
		console.log('deepCompare result:', result);

		if (result !== true) throw new Error('deepCompare failed?');

		console.log('ESM Test: deepCompare function imported and executed successfully.');
	} catch (error) {
		console.error('ESM Test: Error importing or using deepCompare function:', error);
		process.exit(1);
	}
}

main();
