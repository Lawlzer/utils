import { throwError } from '../throwError';

export function returnRandomWeightedObject<T extends { [key: string]: unknown; weight: number }>(allObjects: readonly T[]): T {
	let totalWeight = 0;
	if (Array.isArray(allObjects)) {
		for (const object of allObjects) {
			if (object.weight === undefined) throwError('allObjects must have a weight property');
			// weight of 0 is allowed
			totalWeight += object.weight;
		}
	}

	let currentWeight = Math.floor(Math.random() * totalWeight);
	for (const object of allObjects) {
		// Explicitly check if it's a number, since "0" is considered falsy.
		if (typeof object.weight !== 'number') throwError(`An object did not have weight. Object: ${JSON.stringify(object, null, 2)}`);
		currentWeight -= object.weight;
		if (currentWeight <= 0) return object;
	}
	throwError(`We did not find an object to return, but this should be impossible. allObjects: ${JSON.stringify(allObjects, null, 2)}`);
}
