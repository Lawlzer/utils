import ms from 'ms';
import * as fs from 'fs';
import * as path from 'path';


const fsPromises = fs.promises;


export function returnRandomCharacters(length: number, { capitalLetters = true, lowercaseLetters = true, numbers = true, symbols = true } = {}): string {
    let characters = '';

    characters += capitalLetters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    characters += lowercaseLetters ? 'abcdefghijklmnopqrstuvwxyz' : '';
    characters += numbers ? '0123456789' : '';
    characters += symbols ? '!@#$%^&*()_+-=[]{};:|,./<>?' : '';

    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};


export async function sleep(inputTime: string | number): Promise<void> {
    if (typeof inputTime !== 'number' && typeof inputTime !== 'string') throw new Error('@lawlzer/helpers - sleep: inputTime must be a number or a string representing a number.');
    if (typeof inputTime === 'string') inputTime = ms(inputTime); // convert to ms if it's not already, this handles things like ('10s' or 10000)

    if (typeof inputTime !== 'number') throw new Error('@lawlzer/helpers - sleep: inputTime must be a string that represents a number.');

    const myNumber: number = Number(inputTime);
    return new Promise((resolve) => setTimeout(resolve, myNumber));
};


export function returnRandom<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T {
    if (!Array.isArray(array)) throw new Error('@lawlzer/helpers - returnRandom: array must be an array.');
    return array[Math.floor(Math.random() * array.length)] as T;
};


export function shallowClone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
};


export function deepClone<T>(item: T): T {
    return JSON.parse(JSON.stringify(item));
};


export function returnShuffledArray<T extends Record<K, unknown>, K extends keyof T>(array: T[]): T[] {
    array = deepClone(array); // make a copy of the array so we don't shuffle in-place
    for (var i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j]!;
        array[j] = temp!;
    }
    return array; // Because we cloned it, we must return the original array
};


export function replaceAll(str: string, find: string, replace: string): string {
    const innerEscapeRegExp = (string: string) => {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    };
    return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
};


export function returnAmountOfTimesInArray(array: (string | number)[], itemToFind: string | number): number {
    return array.filter((item) => item === itemToFind).length;
};


export function pluck<T extends Record<K, unknown>, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(o => o[key]);
};


export function returnUniquesOnly(input: unknown[]) {
    return input.filter((item, index) => input.indexOf(item) === index);
};


// TODO fix Typescript for this one
// export function addObjectsTogether<T extends Record<K, unknown>, K extends keyof T>(...input: T[]): T[K][] {
/**
 * This function will ADD numbers together - e.g { a: 1 }, { a: 2 } -> { a: 3 }
 */
export function addObjectsTogether(...input: object[]): object {
    throw new Error('@lawlzer/helpers - addObjectsTogether: This function is not yet implemented.');

    // if (input.length === 1) input = [...input];

    // let loops = 0;
    // for (let object of input) {
    //     for (let key of Object.keys(object)) {
    //         loops++;
    //         if (loops >= 1000000) throw new Error('')
    //         let currentOutput = output[key];
    //         let currentObject = object[key as keyof typeof object];

    //         if (typeof object[key as keyof typeof object] === 'number') {
    //             if (!output[key as keyof typeof output]) output[key as keyof typeof output] = 0;
    //             output[key as keyof typeof output] += object[key as keyof typeof object];
    //         }
    //         else if (typeof object[key as keyof typeof object] === 'object') {
    //             if (!output[key as keyof typeof output]) output[key as keyof typeof output] = {};
    //             if (typeof object[key as keyof typeof object] === 'object') output[key as keyof typeof output] = addObjectsTogether(output[key as keyof typeof output], object[key as keyof typeof object]);
    //         }
    //     }
    // }
    // return output;
};
// console.log('addObjectsTogether: ', addObjectsTogether({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

export function flattenObject() {
    throw new Error('@lawlzer/helpers - flattenObject: This function is not yet implemented.');
}
// // https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
// const flattenObject = (function (isArray, wrapped) {
//     return function (table: object) {
//         const emptyObject: any = {};
//         return reduce('', emptyObject, table);
//     };

//     function reduce(path: string, accumulator: any, table: any) {
//         if (isArray(table)) {
//             var length = table.length;

//             if (length) {
//                 var index = 0;

//                 while (index < length) {
//                     var property = path + '[' + index + ']',
//                         item = table[index++];
//                     if (wrapped(item) !== item) accumulator[property] = item;
//                     else reduce(property, accumulator, item);
//                 }
//             } else accumulator[path] = table;
//         } else {
//             var empty = true;

//             if (path) {
//                 for (var property in table) {
//                     var item = table[property],
//                         property = path + '.' + property,
//                         empty = false;
//                     if (wrapped(item) !== item) accumulator[property] = item;
//                     else reduce(property, accumulator, item);
//                 }
//             } else {
//                 for (var property in table) {
//                     var item: any = table[property],
//                         empty = false;
//                     if (wrapped(item) !== item) accumulator[property] = item;
//                     else reduce(property, accumulator, item);
//                 }
//             }

//             if (empty) accumulator[path] = table;
//         }

//         return accumulator;
//     }
// })(Array.isArray, Object);


// https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
// TODO make this better
export function unflattenObject(table: any): object {
    let result: any = {};

    for (var path in table) {
        var cursor: any = result;
        var length: number = path.length;
        var property: string = '';
        var index: number = 0;

        while (index < length) {
            var char = path.charAt(index);

            if (char === '[') {
                var start = index + 1,
                    end = path.indexOf(']', start),
                    cursor = (cursor[property] = cursor[property] || []),
                    property = path.slice(start, end),
                    index = end + 1;
            } else {
                var cursor = (cursor[property] = cursor[property] || {}),
                    start = char === '.' ? index + 1 : index,
                    bracket = path.indexOf('[', start),
                    dot = path.indexOf('.', start);

                if (bracket < 0 && dot < 0) var end = (index = length);
                else if (bracket < 0) var end = (index = dot);
                else if (dot < 0) var end = (index = bracket);
                else var end = (index = bracket < dot ? bracket : dot);

                var property = path.slice(start, end);
            }
        }
        cursor[property] = table[path];
    }

    return result[''];
};


export function returnRandomWeightedObject<T extends Record<K, unknown>, K extends keyof T>(allObjects: T): T {
    let totalWeight: number = 0;
    if (Array.isArray(allObjects)) {
        for (let object of allObjects) {
            if (!object.weight) throw new Error('@lawlzer/helpers - returnRandomWeightedObject: allObjects must have a weight property');
            totalWeight += object.weight;
        }
    } else {
        throw new Error('@lawlzer/helpers - returnRandomWeightedObject allObjects must be an array. OR, you can fix the function (todo, check @lawlzer/helpers and fix this)');
        // Legacy working code, uncomment to make it work (most likely: also add the type)
        // totalWeight = Object.values(allObjects).reduce((acc, currentWeight) => acc + currentWeight, 0);
    }

    let currentWeight = Math.floor(Math.random() * totalWeight);
    for (const key of Object.keys(allObjects)) {
        const currentObject = allObjects[key as keyof typeof allObjects];
        if (!currentObject || !currentObject.weight || typeof currentObject.weight !== 'number') throw new Error('@lawlzer/helpers - returnRandomWeightedObject: allObjects must have a weight property');
        currentWeight -= currentObject.weight;
        if (currentWeight <= 0) {
            return currentObject;
        }
    }
    throw new Error('@lawlzer/helpers - returnRandomWeightedObject: did find an element to return.');
};


// ensure the directory exists
export async function ensureExists(path: string) {
    await fsPromises.mkdir(path, { recursive: true });
};


export function compareObjects(x: object, y: object) {
    if (x === y) return true;
    // if both x and y are null or undefined and exactly the same

    if (!(x instanceof Object) || !(y instanceof Object)) return false;
    // if they are not strictly equal, they both need to be Objects

    if (x.constructor !== y.constructor) return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

    for (var p in x) {
        if (!x.hasOwnProperty(p)) continue;
        // other properties were tested using x.constructor === y.constructor

        if (!y.hasOwnProperty(p)) return false;
        // allows to compare x[ p ] and y[ p ] when set to undefined

        if (x[p as keyof typeof x] === y[p as keyof typeof y]) continue;
        // if they have the same strict value or identity then they are equal

        if (typeof x[p as keyof typeof x] !== 'object') return false;
        // Numbers, Strings, Functions, Booleans must be strictly equal

        if (!compareObjects(x[p as keyof typeof x], y[p as keyof typeof y])) return false;
        // Objects and Arrays must be tested recursively
    }

    for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    // allows x[ p ] to be set to undefined

    return true;
};


export async function nextFileNumber(path: string): Promise<number> {
    await ensureExists(path);
    let existingFileNames: string[] = await fsPromises.readdir(path);

    let maxFileNumber = 0;
    for (const fileName of existingFileNames) {
        if (parseInt(fileName) > maxFileNumber) maxFileNumber = parseInt(fileName);
    }
    return ++maxFileNumber; // increment and return
};


export function returnStartingDirectory(): string {
    return process.cwd();
    // return require.main.path; // seems to be the same?
};


export function customUwUForUwU(text: string, addFaces: boolean = false): string {
    const faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
    text = text.replace(/(?:r|l)/g, 'w'); // replace "r" and "l" with w
    text = text.replace(/(?:R|L)/g, 'W'); // replace "R" and "L" with W
    text = text.replace(/n([aeiou])/g, 'ny$1'); // replace n(vowel) with ny(vowel)
    text = text.replace(/N([aeiou])/g, 'Ny$1'); // replace N(vowel) with Ny(vowel)
    text = text.replace(/N([AEIOU])/g, 'Ny$1'); // replace N(VOWEL) with Ny(VOWEL)
    text = text.replace(/ove/g, 'uv'); // replace "ove" with "uv"
    if (addFaces) text = text.replace(/\!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ');
    return text;
};


export function floorToPlace(num: number, precision: number): number {
    return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision);
};


/**
 * Files have a name, that look like "1643824533131_O8SwREMybc7Mo7SPh7bGRiLOvpteRpZnQFgXq8ITIPsiRDOt4Q". The first part is the date it should be deleted at, and the second one is a random string.
 * When this function is called, it will return the name of the new file, and then delete any old files.
 * We also add a random string after, to ensure we don't create 2 files with the exact same time.
 */
export async function temporarySave(data: string, timeToSave: number = ms('1d')): Promise<string> {
    if (typeof data !== 'string') throw new Error('temporarySave was not passed a string for data. Please JSON.stringify(data)');
    const pathToTemp = path.join(returnStartingDirectory() + '/temp/');
    await ensureExists(pathToTemp); // Ensure the temp directory exists

    const msTimeToSave = typeof timeToSave === 'string' ? ms(timeToSave) : timeToSave;
    if (!msTimeToSave) throw new Error('temporarySave: timeToSave is not a valid time.');
    if (typeof msTimeToSave !== 'number') throw new Error('temporarySave was not passed a number for timeToSave. Please pass a string or number.');

    const futureDate = Date.now() + msTimeToSave;
    const fileName = futureDate + '_' + returnRandomCharacters(50, { symbols: false }); // Generate a random file name that includes the date to delete it at
    await fsPromises.writeFile(`${pathToTemp}/${fileName}`, data);

    // An ASYNC function we call SYNC, so we can return faster
    (async () => {
        const allFiles = await fsPromises.readdir(pathToTemp);
        for await (const file of allFiles) { // Can probably return after we find one file that does not work.
            const fileTooOld = Date.now() > parseInt(file.split('_')[0]);
            if (!fileTooOld) continue;
            await fsPromises.unlink(path.join(pathToTemp, file)); // The file is too old and should be deleted
        }
    })();
    return path.join(pathToTemp, fileName);
};


// Alternative version that uses /tmp. Not used because it could take up to 10 (or 30?) days for these to be deleted. Could be better (faster) though.
// const temporarySave = async (data, timeToSave = ms('1d')) => {
// 	// await ensureExists('./temp'); // Ensure the temp directory exists
// 	const tempFilePath = os.tmpdir();

// 	const msTimeToSave = typeof timeToSave === 'string' ? ms(timeToSave) : timeToSave;
// 	if (!msTimeToSave) {
// 		console.log('temporarySave: timeToSave is not a valid time.');
// 		return false;
// 	}

// 	const futureDate = Date.now() + msTimeToSave;
// 	const filePath = path.join(tempFilePath, `/achieveValueTemp_${futureDate}_${returnRandomCharacters(50, { symbols: false })}`); // Generate a random file name that includes the date to delete it at
// 	await fsPromises.writeFile(filePath, JSON.stringify(data));
// 	// ${returnStartingDirectory()}/temp/

// 	return filePath;
// };


// Take an array, and split it into smaller arrays.
// E.g: splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2) -> [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
export function splitArray<T extends Record<K, unknown>, K extends keyof T>(arr: T[], chunkSize: number): T[][] {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
};


// REMOVED because WHY did I have this?
// // Map uses an array to return an array. This will iterate over keys (of an object) to return a new object.
// // const objectMap = (obj: any, func: Function) => {
// export function objectMap<T extends Record<K, unknown>, K extends keyof T>(obj: T, func: Function) {
//     return Object.keys(obj).reduce((acc: object, key: any) => {
//         acc[key] = func(obj[key], key);
//         return acc;
//     }, {});
// };


// let output1 = (objectMap({ a: 1, b: 2 }, (value: number, key: string) => {
//     return value + 1;
// }));
// console.log('output1: ', output1);

export async function checkIfExists(path: string): Promise<boolean> {
    try {
        await fsPromises.access(path);
        return true;
    } catch (e) {
        return false;
    }
};


// Force a number to be within the (min) and (max). If it's outside of this range, it will be set to the (min) or the (max)
export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
};


// https://www.reddit.com/r/ProgrammerHumor/comments/thqw5c/itll_never_work_and_i_know_that_for_sure/
export function debug(...message: string[]) {
    if (message.length <= 0) message = ['Helpers.debug call'];
    let e = new Error() as any; // maybe todo - use a type that has a stack property? idk man
    const fileName = e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\')[e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\').length - 1].split(':')[0];
    const frame = e.stack.split('\n')[2]; // change to 3 for grandparent func
    const lineNumber = frame.split(':').reverse()[1];
    const functionName = frame.split(' ')[5];
    const result = `${fileName}: -- ${functionName}(${lineNumber})    -    ${message.join(' ')}`;
    console.log(result);
};


export async function racePromises(promises: Promise<any>[]): Promise<any> {
    const wrappedPromises: Promise<any>[] = [];
    promises.map((promise: Promise<any>) => {
        wrappedPromises.push(
            new Promise((resolve) => {
                promise.then(resolve).catch(resolve);
            }).catch()
        );
    });
    return Promise.race(wrappedPromises).catch();
};

