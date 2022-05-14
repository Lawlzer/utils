"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.racePromises = exports.debug = exports.clamp = exports.checkIfExists = exports.splitArray = exports.temporarySave = exports.floorToPlace = exports.customUwUForUwU = exports.returnStartingDirectory = exports.nextFileNumber = exports.compareObjects = exports.ensureExists = exports.returnRandomWeightedObject = exports.unflattenObject = exports.flattenObject = exports.addObjectsTogether = exports.returnUniquesOnly = exports.pluck = exports.returnAmountOfTimesInArray = exports.replaceAll = exports.returnShuffledArray = exports.deepClone = exports.shallowClone = exports.returnRandom = exports.sleep = exports.returnRandomCharacters = void 0;
var ms_1 = __importDefault(require("ms"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var fsPromises = fs.promises;
function returnRandomCharacters(length, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.capitalLetters, capitalLetters = _c === void 0 ? true : _c, _d = _b.lowercaseLetters, lowercaseLetters = _d === void 0 ? true : _d, _e = _b.numbers, numbers = _e === void 0 ? true : _e, _f = _b.symbols, symbols = _f === void 0 ? true : _f;
    var characters = '';
    characters += capitalLetters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    characters += lowercaseLetters ? 'abcdefghijklmnopqrstuvwxyz' : '';
    characters += numbers ? '0123456789' : '';
    characters += symbols ? '!@#$%^&*()_+-=[]{};:|,./<>?' : '';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
exports.returnRandomCharacters = returnRandomCharacters;
;
function sleep(inputTime) {
    return __awaiter(this, void 0, void 0, function () {
        var myNumber;
        return __generator(this, function (_a) {
            if (typeof inputTime !== 'number' && typeof inputTime !== 'string')
                throw new Error('@lawlzer/helpers - sleep: inputTime must be a number or a string representing a number.');
            if (typeof inputTime !== 'string')
                inputTime = (0, ms_1["default"])(inputTime); // convert to ms if it's not already, this handles things like ('10s' or 10000)
            if (typeof inputTime !== 'number')
                throw new Error('@lawlzer/helpers - sleep: inputTime must be a string representing a number.');
            myNumber = Number(inputTime);
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, myNumber); })];
        });
    });
}
exports.sleep = sleep;
;
function returnRandom(array) {
    if (!Array.isArray(array))
        throw new Error('@lawlzer/helpers - returnRandom: array must be an array.');
    return array[Math.floor(Math.random() * array.length)];
}
exports.returnRandom = returnRandom;
;
function shallowClone(object) {
    return JSON.parse(JSON.stringify(object));
}
exports.shallowClone = shallowClone;
;
function deepClone(item) {
    return JSON.parse(JSON.stringify(item));
}
exports.deepClone = deepClone;
;
function returnShuffledArray(array) {
    array = deepClone(array); // make a copy of the array so we don't shuffle in-place
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array; // Because we cloned it, we must return the original array
}
exports.returnShuffledArray = returnShuffledArray;
;
function replaceAll(str, find, replace) {
    var innerEscapeRegExp = function (string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    };
    return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
;
function returnAmountOfTimesInArray(array, itemToFind) {
    return array.filter(function (item) { return item === itemToFind; }).length;
}
exports.returnAmountOfTimesInArray = returnAmountOfTimesInArray;
;
function pluck(array, key) {
    return array.map(function (o) { return o[key]; });
}
exports.pluck = pluck;
;
function returnUniquesOnly(input) {
    return input.filter(function (item, index) { return input.indexOf(item) === index; });
}
exports.returnUniquesOnly = returnUniquesOnly;
;
// TODO fix Typescript for this one
// export function addObjectsTogether<T extends Record<K, unknown>, K extends keyof T>(...input: T[]): T[K][] {
/**
 * This function will ADD numbers together - e.g { a: 1 }, { a: 2 } -> { a: 3 }
 */
function addObjectsTogether() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
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
}
exports.addObjectsTogether = addObjectsTogether;
;
// console.log('addObjectsTogether: ', addObjectsTogether({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
function flattenObject() {
    throw new Error('@lawlzer/helpers - flattenObject: This function is not yet implemented.');
}
exports.flattenObject = flattenObject;
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
function unflattenObject(table) {
    var result = {};
    for (var path in table) {
        var cursor = result;
        var length = path.length;
        var property = '';
        var index = 0;
        while (index < length) {
            var char = path.charAt(index);
            if (char === '[') {
                var start = index + 1, end = path.indexOf(']', start), cursor = (cursor[property] = cursor[property] || []), property = path.slice(start, end), index = end + 1;
            }
            else {
                var cursor = (cursor[property] = cursor[property] || {}), start = char === '.' ? index + 1 : index, bracket = path.indexOf('[', start), dot = path.indexOf('.', start);
                if (bracket < 0 && dot < 0)
                    var end = (index = length);
                else if (bracket < 0)
                    var end = (index = dot);
                else if (dot < 0)
                    var end = (index = bracket);
                else
                    var end = (index = bracket < dot ? bracket : dot);
                var property = path.slice(start, end);
            }
        }
        cursor[property] = table[path];
    }
    return result[''];
}
exports.unflattenObject = unflattenObject;
;
function returnRandomWeightedObject(allObjects) {
    var totalWeight = 0;
    if (Array.isArray(allObjects)) {
        for (var _i = 0, allObjects_1 = allObjects; _i < allObjects_1.length; _i++) {
            var object = allObjects_1[_i];
            if (!object.weight)
                throw new Error('@lawlzer/helpers - returnRandomWeightedObject: allObjects must have a weight property');
            totalWeight += object.weight;
        }
    }
    else {
        throw new Error('@lawlzer/helpers - returnRandomWeightedObject allObjects must be an array. OR, you can fix the function (todo, check @lawlzer/helpers and fix this)');
        // Legacy working code, uncomment to make it work (most likely: also add the type)
        // totalWeight = Object.values(allObjects).reduce((acc, currentWeight) => acc + currentWeight, 0);
    }
    var currentWeight = Math.floor(Math.random() * totalWeight);
    for (var _a = 0, _b = Object.keys(allObjects); _a < _b.length; _a++) {
        var key = _b[_a];
        var currentObject = allObjects[key];
        if (!currentObject || !currentObject.weight || typeof currentObject.weight !== 'number')
            throw new Error('@lawlzer/helpers - returnRandomWeightedObject: allObjects must have a weight property');
        currentWeight -= currentObject.weight;
        if (currentWeight <= 0) {
            return currentObject;
        }
    }
    throw new Error('@lawlzer/helpers - returnRandomWeightedObject: did find an element to return.');
}
exports.returnRandomWeightedObject = returnRandomWeightedObject;
;
// ensure the directory exists
function ensureExists(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fsPromises.mkdir(path, { recursive: true })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.ensureExists = ensureExists;
;
function compareObjects(x, y) {
    if (x === y)
        return true;
    // if both x and y are null or undefined and exactly the same
    if (!(x instanceof Object) || !(y instanceof Object))
        return false;
    // if they are not strictly equal, they both need to be Objects
    if (x.constructor !== y.constructor)
        return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.
    for (var p in x) {
        if (!x.hasOwnProperty(p))
            continue;
        // other properties were tested using x.constructor === y.constructor
        if (!y.hasOwnProperty(p))
            return false;
        // allows to compare x[ p ] and y[ p ] when set to undefined
        if (x[p] === y[p])
            continue;
        // if they have the same strict value or identity then they are equal
        if (typeof x[p] !== 'object')
            return false;
        // Numbers, Strings, Functions, Booleans must be strictly equal
        if (!compareObjects(x[p], y[p]))
            return false;
        // Objects and Arrays must be tested recursively
    }
    for (p in y)
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
            return false;
    // allows x[ p ] to be set to undefined
    return true;
}
exports.compareObjects = compareObjects;
;
function nextFileNumber(path) {
    return __awaiter(this, void 0, void 0, function () {
        var existingFileNames, maxFileNumber, _i, existingFileNames_1, fileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ensureExists(path)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fsPromises.readdir(path)];
                case 2:
                    existingFileNames = _a.sent();
                    maxFileNumber = 0;
                    for (_i = 0, existingFileNames_1 = existingFileNames; _i < existingFileNames_1.length; _i++) {
                        fileName = existingFileNames_1[_i];
                        if (parseInt(fileName) > maxFileNumber)
                            maxFileNumber = parseInt(fileName);
                    }
                    return [2 /*return*/, ++maxFileNumber]; // increment and return
            }
        });
    });
}
exports.nextFileNumber = nextFileNumber;
;
function returnStartingDirectory() {
    return process.cwd();
    // return require.main.path; // seems to be the same?
}
exports.returnStartingDirectory = returnStartingDirectory;
;
function customUwUForUwU(text, addFaces) {
    if (addFaces === void 0) { addFaces = false; }
    var faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
    text = text.replace(/(?:r|l)/g, 'w'); // replace "r" and "l" with w
    text = text.replace(/(?:R|L)/g, 'W'); // replace "R" and "L" with W
    text = text.replace(/n([aeiou])/g, 'ny$1'); // replace n(vowel) with ny(vowel)
    text = text.replace(/N([aeiou])/g, 'Ny$1'); // replace N(vowel) with Ny(vowel)
    text = text.replace(/N([AEIOU])/g, 'Ny$1'); // replace N(VOWEL) with Ny(VOWEL)
    text = text.replace(/ove/g, 'uv'); // replace "ove" with "uv"
    if (addFaces)
        text = text.replace(/\!+/g, ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ');
    return text;
}
exports.customUwUForUwU = customUwUForUwU;
;
function floorToPlace(num, precision) {
    return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision);
}
exports.floorToPlace = floorToPlace;
;
/**
 * Files have a name, that look like "1643824533131_O8SwREMybc7Mo7SPh7bGRiLOvpteRpZnQFgXq8ITIPsiRDOt4Q". The first part is the date it should be deleted at, and the second one is a random string.
 * When this function is called, it will return the name of the new file, and then delete any old files.
 * We also add a random string after, to ensure we don't create 2 files with the exact same time.
 */
function temporarySave(data, timeToSave) {
    if (timeToSave === void 0) { timeToSave = (0, ms_1["default"])('1d'); }
    return __awaiter(this, void 0, void 0, function () {
        var pathToTemp, msTimeToSave, futureDate, fileName;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof data !== 'string')
                        throw new Error('temporarySave was not passed a string for data. Please JSON.stringify(data)');
                    pathToTemp = path.join(returnStartingDirectory() + '/temp/');
                    return [4 /*yield*/, ensureExists(pathToTemp)];
                case 1:
                    _a.sent(); // Ensure the temp directory exists
                    msTimeToSave = typeof timeToSave === 'string' ? (0, ms_1["default"])(timeToSave) : timeToSave;
                    if (!msTimeToSave)
                        throw new Error('temporarySave: timeToSave is not a valid time.');
                    if (typeof msTimeToSave !== 'number')
                        throw new Error('temporarySave was not passed a number for timeToSave. Please pass a string or number.');
                    futureDate = Date.now() + msTimeToSave;
                    fileName = futureDate + '_' + returnRandomCharacters(50, { symbols: false });
                    return [4 /*yield*/, fsPromises.writeFile("".concat(pathToTemp, "/").concat(fileName), data)];
                case 2:
                    _a.sent();
                    // An ASYNC function we call SYNC, so we can return faster
                    (function () { return __awaiter(_this, void 0, void 0, function () {
                        var allFiles, allFiles_1, allFiles_1_1, file, fileTooOld, e_1_1;
                        var e_1, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, fsPromises.readdir(pathToTemp)];
                                case 1:
                                    allFiles = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    _b.trys.push([2, 8, 9, 14]);
                                    allFiles_1 = __asyncValues(allFiles);
                                    _b.label = 3;
                                case 3: return [4 /*yield*/, allFiles_1.next()];
                                case 4:
                                    if (!(allFiles_1_1 = _b.sent(), !allFiles_1_1.done)) return [3 /*break*/, 7];
                                    file = allFiles_1_1.value;
                                    fileTooOld = Date.now() > parseInt(file.split('_')[0]);
                                    if (!fileTooOld)
                                        return [3 /*break*/, 6];
                                    return [4 /*yield*/, fsPromises.unlink(path.join(pathToTemp, file))];
                                case 5:
                                    _b.sent(); // The file is too old and should be deleted
                                    _b.label = 6;
                                case 6: return [3 /*break*/, 3];
                                case 7: return [3 /*break*/, 14];
                                case 8:
                                    e_1_1 = _b.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 14];
                                case 9:
                                    _b.trys.push([9, , 12, 13]);
                                    if (!(allFiles_1_1 && !allFiles_1_1.done && (_a = allFiles_1["return"]))) return [3 /*break*/, 11];
                                    return [4 /*yield*/, _a.call(allFiles_1)];
                                case 10:
                                    _b.sent();
                                    _b.label = 11;
                                case 11: return [3 /*break*/, 13];
                                case 12:
                                    if (e_1) throw e_1.error;
                                    return [7 /*endfinally*/];
                                case 13: return [7 /*endfinally*/];
                                case 14: return [2 /*return*/];
                            }
                        });
                    }); })();
                    return [2 /*return*/, path.join(pathToTemp, fileName)];
            }
        });
    });
}
exports.temporarySave = temporarySave;
;
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
function splitArray(arr, chunkSize) {
    var chunks = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}
exports.splitArray = splitArray;
;
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
function checkIfExists(path) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fsPromises.access(path)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.checkIfExists = checkIfExists;
;
// Force a number to be within the (min) and (max). If it's outside of this range, it will be set to the (min) or the (max)
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
;
// https://www.reddit.com/r/ProgrammerHumor/comments/thqw5c/itll_never_work_and_i_know_that_for_sure/
function debug() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (message.length <= 0)
        message = ['Helpers.debug call'];
    var e = new Error(); // maybe todo - use a type that has a stack property? idk man
    var fileName = e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\')[e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\').length - 1].split(':')[0];
    var frame = e.stack.split('\n')[2]; // change to 3 for grandparent func
    var lineNumber = frame.split(':').reverse()[1];
    var functionName = frame.split(' ')[5];
    var result = "".concat(fileName, ": -- ").concat(functionName, "(").concat(lineNumber, ")    -    ").concat(message.join(' '));
    console.log(result);
}
exports.debug = debug;
;
function racePromises(promises) {
    return __awaiter(this, void 0, void 0, function () {
        var wrappedPromises;
        return __generator(this, function (_a) {
            wrappedPromises = [];
            promises.map(function (promise) {
                wrappedPromises.push(new Promise(function (resolve) {
                    promise.then(resolve)["catch"](resolve);
                })["catch"]());
            });
            return [2 /*return*/, Promise.race(wrappedPromises)["catch"]()];
        });
    });
}
exports.racePromises = racePromises;
;
//# sourceMappingURL=index.js.map