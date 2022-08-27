export function returnRandomWeightedObject<T extends { weight: number; [key: string]: unknown }>(allObjects: T[]): T {
	let totalWeight = 0;
	if (Array.isArray(allObjects)) {
		for (const object of allObjects) {
			if (!object.weight) throw new Error('@lawlzer/helpers - returnRandomWeightedObject: allObjects must have a weight property');
			totalWeight += object.weight;
		}
	}

	let currentWeight = Math.floor(Math.random() * totalWeight);
	for (const object of allObjects) {
		// Explicitly check if it's a number, since "0" is considered falsy.
		if (typeof object.weight !== 'number') throw new Error(`@lawlzer/helpers - returnRandomWeightedObject: an object did not have weight. object: ${object}`);
		currentWeight -= object.weight;
		if (currentWeight <= 0) return object;
	}
	throw new Error(`@lawlzer/helpers - returnRandomWeightedObject: We did not find an object to return. allObjects: ${allObjects}`);
}
