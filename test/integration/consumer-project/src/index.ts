import { deepCompare } from '@lawlzer/utils';

async function main() {
	console.debug('Consumer Project Test (ESM): Starting...');
	try {
		console.debug('Calling deepCompare...');
		const result = deepCompare({ a: 1, b: 2 }, { a: 1, b: 2 });
		console.debug('deepCompare result:', result);

		if (!result) throw new Error('deepCompare failed?');

		console.debug('Consumer Project Test (ESM): Functions executed successfully.');
	} catch (error) {
		console.error('Consumer Project Test (ESM): Error:', error);
		process.exit(1);
	}
}

void main();
