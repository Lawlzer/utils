// If we export * from '~/place', then .d.ts files aren't generated for the functionss.  It *works*, but there's no intellisense.

// Ideally, we would dynamically export every function without referencing them here, but that seemed to be impossible.
// If you know a better way to do this with TypeScript (that offers intellisense), I'd love to know :p

export { clamp } from '~/utils/clamp';
export { clone } from '~/utils/clone';
export { deepCompare } from '~/utils/deepCompare';
export { ensureExists } from '~/utils/ensureExists';
export { flattenObject, unflattenObject } from '~/utils/flatten';
export { floorToPrecision } from '~/utils/floorToPrecision';
export { getAllFiles } from '~/utils/getAllFiles';
export { getAmountOfTimesInArray } from '~/utils/getAmountOfTimesInArray';
export { getRandomCharacters } from '~/utils/getRandomCharacters';
export { getUniques } from '~/utils/getUniques';
export { keys } from '~/utils/keys';
export { lowerCaseObjectKeys } from '~/utils/lowerCaseObjectKeys';
export { multiSort } from '~/utils/multiSort';
export { objectHasKeysWithType } from '~/utils/objectHasKeysWithType';
export { objectMap } from '~/utils/objectMap';
export { pluck } from '~/utils/pluck';
export { racePromises } from '~/utils/racePromises';
export { replaceAll } from '~/utils/replaceAll';
export { returnRandomElement } from '~/utils/returnRandomElement';
export { returnRandomWeightedObject } from '~/utils/returnRandomWeightedObject';
export { shuffleArray } from '~/utils/shuffleArray';
export { sleep } from '~/utils/sleep';
export { temporarySave } from '~/utils/temporarySave';
export { AllTypes, Dictionary, ForceSimplify, UnknownObject } from '~/utils/types';
export { UwU } from '~/utils/UwU';
