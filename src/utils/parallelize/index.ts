import { throwError } from '../throwError';

/**
 * Run a function in parallel, a certain amount of times, with a certain amount of parallelization.
 */
export async function runInParallel(totalAmount: number, maxParallel: number, func: () => Promise<void>) {
	let amountHandled = 0;

	if (maxParallel > totalAmount) throwError('maxParallel is greater than totalAmount. The values are likely meant to be swapped.');

	async function runOne(): Promise<void> {
		amountHandled++;
		if (amountHandled > totalAmount) return;

		await func();
		await runOne();
	}

	const promises: Promise<void>[] = [];
	for (let i = 0; i < maxParallel; i++) {
		promises.push(runOne());
	}

	await Promise.all(promises);
}
