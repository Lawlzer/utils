export declare function returnRandomCharacters(length: number, { capitalLetters, lowercaseLetters, numbers, symbols }?: {
    capitalLetters?: boolean | undefined;
    lowercaseLetters?: boolean | undefined;
    numbers?: boolean | undefined;
    symbols?: boolean | undefined;
}): string;
export declare function sleep(inputTime: string | number): Promise<void>;
export declare function returnRandom<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T;
export declare function shallowClone<T>(object: T): T;
export declare function deepClone<T>(item: T): T;
export declare function returnShuffledArray<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T[];
export declare function replaceAll(str: string, find: string, replace: string): string;
export declare function returnAmountOfTimesInArray(array: (string | number)[], itemToFind: string | number): number;
export declare function pluck<T extends Record<K, unknown>, K extends keyof T>(array: T[], key: K): T[K][];
export declare function returnUniquesOnly(input: unknown[]): unknown[];
/**
 * This function will ADD numbers together - e.g { a: 1 }, { a: 2 } -> { a: 3 }
 */
export declare function addObjectsTogether(...input: object[]): object;
export declare function flattenObject(): void;
export declare function unflattenObject(table: any): object;
export declare function returnRandomWeightedObject<T extends Record<K, unknown>, K extends keyof T>(allObjects: T): T;
export declare function ensureExists(path: string): Promise<void>;
export declare function compareObjects(x: object, y: object): boolean;
export declare function nextFileNumber(path: string): Promise<number>;
export declare function returnStartingDirectory(): string;
export declare function customUwUForUwU(text: string, addFaces?: boolean): string;
export declare function floorToPlace(num: number, precision: number): number;
/**
 * Files have a name, that look like "1643824533131_O8SwREMybc7Mo7SPh7bGRiLOvpteRpZnQFgXq8ITIPsiRDOt4Q". The first part is the date it should be deleted at, and the second one is a random string.
 * When this function is called, it will return the name of the new file, and then delete any old files.
 * We also add a random string after, to ensure we don't create 2 files with the exact same time.
 */
export declare function temporarySave(data: string, timeToSave?: number): Promise<string>;
export declare function splitArray<T extends Record<K, unknown>, K extends keyof T>(arr: T[], chunkSize: number): T[][];
export declare function checkIfExists(path: string): Promise<boolean>;
export declare function clamp(value: number, min: number, max: number): number;
export declare function debug(...message: string[]): void;
export declare function racePromises(promises: Promise<any>[]): Promise<any>;
//# sourceMappingURL=index.d.ts.map