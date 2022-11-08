// Ideally, we would dynamically export every function without referencing them here.
// I didn't figure out a way to do that (with intellisense).

import path from 'path';

// Transform paths in realtime for Sucrase (only used when running locally)
if (process.env.__RUNNING_LOCALLY__) require('better-module-alias')(path.resolve(__dirname, '../'));

export * from '~/utils/assertType';
export * from '~/utils/clamp'; // If I do this (absolute import from src/dist), there is no intellisense.
export * from '~/utils/clone';
export * from '~/utils/combineObjects';
export * from '~/utils/createError';
export * from '~/utils/deepCompare';
export * from '~/utils/ensureExists';
export * from '~/utils/flatten';
export * from '~/utils/floorToPrecision';
export * from '~/utils/getAllFiles'; // If I do this (relative import), there is intellisense :/
export * from '~/utils/getAmountOfTimesInArray';
export * from '~/utils/getFlag';
export * from '~/utils/getRandomCharacters';
export * from '~/utils/getUniques';
export * from '~/utils/initDotenv';
export * from '~/utils/keys';
export * from '~/utils/lowerCaseObjectKeys';
export * from '~/utils/multiSort';
export * from '~/utils/objectHasKeysWithType';
export * from '~/utils/objectMap';
export * from '~/utils/pathToFileName';
export * from '~/utils/pluck';
export * from '~/utils/racePromises';
export * from '~/utils/replaceAll';
export * from '~/utils/returnRandomElement';
export * from '~/utils/returnRandomWeightedObject';
export * from '~/utils/shuffleArray';
export * from '~/utils/sleep';
export * from '~/utils/temporarySave';
export * from '~/utils/throwError';
export * from '~/utils/types';
export * from '~/utils/UwU';
