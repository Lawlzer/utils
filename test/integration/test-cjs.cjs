const { deepCompare } = require('@lawlzer/utils');

async function main() {
	console.log('CJS Test: Starting...');
	try {
		console.log('Calling deepCompare...');
		const result = deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 });
		console.log('deepCompare result:', result);

		if (result !== true) throw new Error('deepCompare failed?');

		console.log('CJS Test: deepCompare function imported and executed successfully.');
	} catch (error) {
		console.error('CJS Test: Error importing or using deepCompare function:', error);
		process.exit(1);
	}
}

main();
