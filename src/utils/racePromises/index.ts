/**
 * Given an array of promises it will return the first promise to resolve.
 */

// Maybe it's just me, but I can't fix this error
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export async function racePromises(promises: readonly Promise<unknown>[]): Promise<unknown> {
	const wrappedPromises: Promise<unknown>[] = [];
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	promises.map((promise: Promise<unknown>) => {
		wrappedPromises.push(
			new Promise((resolve) => {
				promise.then(resolve).catch(resolve);
			}).catch()
		);
	});
	return Promise.race(wrappedPromises).catch();
}
