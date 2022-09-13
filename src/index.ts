// If we export * from '~/place', then .d.ts files aren't generated for the functions.  It *works*, but there's no intellisense.

// Ideally, we would dynamically export every function without referencing them here, but that seemed to be impossible.
// If you know a better way to do this with TypeScript (that offers intellisense), I'd love to know :p

// Secondly, it would be great to use absolute imports at all, but I haven't found a package that will modify the *.d.ts file absolute imports.
// If we have .d.ts files with absolute imports, BUILDING other projects (that use this package) will error!

export * from '~/utils/assertType';
export * from '~/utils/clamp'; // If I do this (absolute import from src/dist), there is no intellisense.
export * from '~/utils/clone';
export * from '~/utils/combineObjects';
export * from '~/utils/deepCompare';
export * from '~/utils/ensureExists';
export * from '~/utils/flatten';
export * from '~/utils/floorToPrecision';
export * from '~/utils/getAllFiles'; // If I do this (relative import), there is intellisense :/
export * from '~/utils/getAmountOfTimesInArray';
export * from '~/utils/getFlag';
export * from '~/utils/getRandomCharacters';
export * from '~/utils/getUniques';
export * from '~/utils/keys';
export * from '~/utils/lowerCaseObjectKeys';
export * from '~/utils/multiSort';
export * from '~/utils/objectHasKeysWithType';
export * from '~/utils/objectMap';
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
