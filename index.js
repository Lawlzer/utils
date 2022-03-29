const ms = require('ms');
const fs = require('fs');

const path = require('path');
const fsPromises = fs.promises;

const returnRandomCharacters = (length, { capitalLetters = true, lowercaseLetters = true, numbers = true, symbols = true } = {}) => {
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
module.exports.returnRandomCharacters = returnRandomCharacters;

const sleep = async (inputTime) => {
	if (typeof inputTime === 'string') inputTime = ms(inputTime); // convert to ms if it's not already, this handles things like ('10s' or 10000)
	return new Promise((resolve) => setTimeout(resolve, inputTime));
};
module.exports.sleep = sleep;

const returnRandom = (input) => {
	return input[Math.floor(Math.random() * input.length)];
};
module.exports.returnRandom = returnRandom;

const returnShuffledArray = (array) => {
	var currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
};

module.exports.returnShuffledArray = returnShuffledArray;

const replaceAll = (str, find, replace) => {
	const innerEscapeRegExp = (string) => {
		return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	};
	return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
};
module.exports.replaceAll = replaceAll;

const shallowClone = (array) => {
	return JSON.parse(JSON.stringify(array));
};
module.exports.shallowClone = shallowClone;

const getAmountOfTimesInArray = (array, itemToFind) => {
	return array.filter((item) => item === itemToFind).length;
};
module.exports.getAmountOfTimesInArray = getAmountOfTimesInArray;

const pluck = (array, key) => {
	return array.map((o) => o[key]);
};
module.exports.pluck = pluck;

const returnUniquesOnly = (input) => {
	var prims = { boolean: {}, number: {}, string: {} },
		objs = [];
	return input.filter(function (item) {
		var type = typeof item;
		if (type in prims) return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
		else return objs.indexOf(item) >= 0 ? false : objs.push(item);
	});
};
module.exports.returnUniquesOnly = returnUniquesOnly;

const addObjectsTogether = (...input) => {
	if (input.length === 1) input = [...input];
	let output = {};

	for (let object of input) {
		for (let key of Object.keys(object)) {
			if (typeof object[key] === 'number') {
				if (!output[key]) output[key] = 0;
				output[key] += object[key];
			}
			if (typeof object[key] === 'object') {
				if (!output[key]) output[key] = {};
				output[key] = addObjectsTogether(output[key], object[key]);
			}
		}
	}
	return output;
};
module.exports.addObjectsTogether = addObjectsTogether;

// chooseWeightedRandomWithWeightKey({
// 	one: { weight: 1 },
// 	two: { weight: 2 },
// 	three: { weight: 3 },
// });
const chooseWeightedRandomWithWeightKey = (input) => {
	let maxWeight = 0;
	for (const key in input) {
		// create the max weight
		maxWeight += input[key].weight;
	}

	let randomNumber = Math.floor(Math.random() * maxWeight); // generate a max number, between 0 and the max weight allowed
	for (const key in input) {
		// then go element by element, subtract the weight, if it's lower than the current element, that's the random element
		randomNumber -= input[key].weight;
		if (randomNumber <= 0) {
			return input[key].name;
		}
	}
	throw new Error('chooseWeightedRandomWithWeightKey did find an element to return.');
};
module.exports.chooseWeightedRandomWithWeightKey = chooseWeightedRandomWithWeightKey;

// https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
const flattenObject = (function (isArray, wrapped) {
	return function (table) {
		return reduce('', {}, table);
	};

	function reduce(path, accumulator, table) {
		if (isArray(table)) {
			var length = table.length;

			if (length) {
				var index = 0;

				while (index < length) {
					var property = path + '[' + index + ']',
						item = table[index++];
					if (wrapped(item) !== item) accumulator[property] = item;
					else reduce(property, accumulator, item);
				}
			} else accumulator[path] = table;
		} else {
			var empty = true;

			if (path) {
				for (var property in table) {
					var item = table[property],
						property = path + '.' + property,
						empty = false;
					if (wrapped(item) !== item) accumulator[property] = item;
					else reduce(property, accumulator, item);
				}
			} else {
				for (var property in table) {
					var item = table[property],
						empty = false;
					if (wrapped(item) !== item) accumulator[property] = item;
					else reduce(property, accumulator, item);
				}
			}

			if (empty) accumulator[path] = table;
		}

		return accumulator;
	}
})(Array.isArray, Object);
module.exports.flattenObject = flattenObject;

// https://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
const unflattenObject = (table) => {
	var result = {};

	for (var path in table) {
		var cursor = result,
			length = path.length,
			property = '',
			index = 0;

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
module.exports.unflattenObject = unflattenObject;

const chooseRandomWeightedObject = (allObjects, recursive = false) => {
	const totalWeight = Object.values(allObjects).reduce((acc, currentWeight) => acc + currentWeight, 0);

	let currentWeight = Math.floor(Math.random() * totalWeight);
	for (const key of Object.keys(allObjects)) {
		currentWeight -= allObjects[key];
		if (currentWeight <= 0) {
			return key;
		}
	}
	throw new Error('chooseRandomWeightedObject did find an element to return.');
};
module.exports.chooseRandomWeightedObject = chooseRandomWeightedObject;

const deepClone = (item) => {
	return JSON.parse(JSON.stringify(item));
};
module.exports.deepClone = deepClone;

const ensureExists = (path) => {
	fs.mkdirSync(path, { recursive: true }); // ensure the directory exists
	// if (!fs.existsSync(path)) {
	//     fs.mkdirSync(path, { recursive: true });
	// }
};
module.exports.ensureExists = ensureExists;

const compareObjects = (x, y) => {
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

		if (x[p] === y[p]) continue;
		// if they have the same strict value or identity then they are equal

		if (typeof x[p] !== 'object') return false;
		// Numbers, Strings, Functions, Booleans must be strictly equal

		if (!compareObjects(x[p], y[p])) return false;
		// Objects and Arrays must be tested recursively
	}

	for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
	// allows x[ p ] to be set to undefined

	return true;
};
module.exports.compareObjects = compareObjects;

const returnNextFileNumber = (path) => {
	fs.mkdirSync(path, { recursive: true }); // ensure the directory exists
	let existingFileNames = fs.readdirSync(path);
	if (existingFileNames.length < 1) return '1';
	existingFileNames.sort((b, a) => parseInt(a) - parseInt(b)); // sort the files by INT (if we don't parseInt, we'll read them as strings === BAD)
	return parseInt(existingFileNames[0]) + 1 + '';
};
module.exports.returnNextFileNumber = returnNextFileNumber;

const getStartingDirectory = () => {
	return process.cwd();
	// return require.main.path; // seems to be the same?
	// return path.resolve(__dirname); // may also work? (but not sure)
};
module.exports.getStartingDirectory = getStartingDirectory;

const returnCustomUwUforUwU = (text, addFaces = false) => {
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
module.exports.returnCustomUwUforUwU = returnCustomUwUforUwU;

const floorToPlace = (num, precision) => {
	return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision);
};
module.exports.floorToPlace = floorToPlace;

// Files have a name, that look like "1643824533131_O8SwREMybc7Mo7SPh7bGRiLOvpteRpZnQFgXq8ITIPsiRDOt4Q". The first part is the date it should be deleted at, and the second one is a random string.
// When this function is called, it will return the name of the new file, and then delete any old files.
// We also add a random string after, to ensure we don't create 2 files with the exact same time.
const temporarySave = async (data, timeToSave = ms('1d')) => {
	await ensureExists('./temp'); // Ensure the temp directory exists

	const msTimeToSave = typeof timeToSave === 'string' ? ms(timeToSave) : timeToSave;
	if (!msTimeToSave) {
		console.log('temporarySave: timeToSave is not a valid time.');
		return false;
	}

	const futureDate = Date.now() + msTimeToSave;
	const fileName = futureDate + '_' + returnRandomCharacters(50, { symbols: false }); // Generate a random file name that includes the date to delete it at
	await fsPromises.writeFile(`${getStartingDirectory()}/temp/${fileName}`, JSON.stringify(data));

	// An ASYNC function we call SYNC, so we can return faster
	(async () => {
		const allFiles = await fsPromises.readdir(getStartingDirectory() + '/temp');
		for await (const file of allFiles) {
			const fileTooOld = Date.now() > parseInt(file.split('_')[0]);
			if (!fileTooOld) continue;
			await fsPromises.unlink(`${getStartingDirectory()}/temp/${file}`); // The file is too old and should be deleted
		}
	})();
	return fileName;
};
module.exports.temporarySave = temporarySave;

// Take an array, and split it into smaller arrays.
// E.g: splitArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2) -> [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
const splitArray = (arr, chunkSize) => {
	let chunks = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize));
	}
	return chunks;
};
module.exports.splitArray = splitArray;

// Map uses an array to return an array. This will iterate over keys (of an object) to return a new object.
const objectMap = (obj, func) => {
	return Object.keys(obj).reduce((acc, key) => {
		acc[key] = func(obj[key], key);
		return acc;
	}, {});
};
module.exports.objectMap = objectMap;

const checkIfExists = async (path) => {
	try {
		await fsPromises.access(path);
		return true;
	} catch (e) {
		return false;
	}
};
module.exports.checkIfExists = checkIfExists;

// Force a number to be within the (min) and (max). If it's outside of this range, it will be set to the (min) or the (max)
const clamp = (value, min, max) => {
	return Math.min(Math.max(value, min), max);
};
module.exports.clamp = clamp;

// https://www.reddit.com/r/ProgrammerHumor/comments/thqw5c/itll_never_work_and_i_know_that_for_sure/
const debug = (...message) => {
	if (message.length <= 0) message = ['Helpers.debug call'];
	let e = new Error();
	const fileName = e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\')[e.stack.split('\n')[2].split('/').pop().split('(')[1].split(')')[0].split('\\').length - 1].split(':')[0];
	const frame = e.stack.split('\n')[2]; // change to 3 for grandparent func
	const lineNumber = frame.split(':').reverse()[1];
	const functionName = frame.split(' ')[5];
	const result = `${fileName}: -- ${functionName}(${lineNumber})    -    ${message.join(' ')}`;
	console.log(result);
};
module.exports.debug = debug;

const racePromises = async (promises) => {
	const wrappedPromises = [];
	promises.map((promise, index) => {
		wrappedPromises.push(
			new Promise((resolve) => {
				promise
					.then(() => {
						resolve(index);
					})
					.catch();
			}).catch()
		);
	});
	return Promise.race(wrappedPromises).catch();
};
module.exports.racePromises = racePromises;
