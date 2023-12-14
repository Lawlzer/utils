/**
 * We cannot pass in actual promises, because they would be executed immediately.
 *
 * Pass in a function, that returns a promise, instead.
 *
 * e.g runFunctionsInParallel(3, [() => fetch('https://example.com'), () => fetch('https://example.com')])
 */
export async function runFunctionsInParallel(parallelAmount: number, functions: (() => Promise<unknown>)[]): Promise<unknown[]> {
	const results: unknown[] = [];

	let index = 0;
	async function runOne(): Promise<void> {
		if (index >= functions.length) return;
		const func = functions[index];

		index++;

		const result = await func();
		results.push(result);

		await runOne();
	}

	const promises: Promise<void>[] = [];
	for (let i = 0; i < parallelAmount; i++) {
		promises.push(runOne());
	}

	await Promise.all(promises);
	return results;
}
