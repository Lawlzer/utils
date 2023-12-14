export async function runPromisesInParallel(parallelAmount: number, functions: Promise<unknown>[]): Promise<unknown[]> {
	const results: unknown[] = [];

	let index = 0;
	async function runOne(): Promise<void> {
		if (results.length >= functions.length) return;
		results.push(await functions[index]);

		await runOne();
	}

	const promises: Promise<void>[] = [];
	for (let i = 0; i < parallelAmount; i++) {
		promises.push(runOne());
	}

	await Promise.all(promises);
	return results;
}
