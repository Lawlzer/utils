const ms = require('ms');
const fs = require('fs'); 

const returnRandomCharacters = (length) => {
    let result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.returnRandomCharacters = returnRandomCharacters;

const returnRandomPassword = (length) => {
    let result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{};:.>,<?';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.returnRandomPassword = returnRandomPassword;

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;

const returnRandom = (input) => {
    return input[Math.floor(Math.random() * input.length)];
}
exports.returnRandom = returnRandom;

const returnShuffledArray = (array) => {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

exports.returnShuffledArray = returnShuffledArray;

const replaceAll = (str, find, replace) => {
    const innerEscapeRegExp = (string) => {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    return str.replace(new RegExp(innerEscapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;

const shallowClone = (array) => {
    return JSON.parse(JSON.stringify(array));
}
exports.shallowClone = shallowClone;

const deepClone = (array) => {
    console.log('DEEP CLONE NOT YET IMPLEMENTED');
    return;
}
exports.deepClone = deepClone;

const getAmountOfTimesInArray = (array, itemToFind) => {
    return array.filter(item => item === itemToFind).length
}
exports.getAmountOfTimesInArray = getAmountOfTimesInArray;

const pluck = (array, key) => {
    return array.map(o => o[key]);
}
exports.pluck = pluck;

function returnUniquesOnly(a) {
    var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];
    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
exports.returnUniquesOnly = returnUniquesOnly;

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
                if (!output[key]) output[key] = {}
                output[key] = addObjectsTogether(output[key], object[key]);
            }
        }
    }
    return output;
}
exports.addObjectsTogether = addObjectsTogether;


// const object = {
//     a: {
//         b: {
//             c: 'asdfhl'
//         },
//     },
// };

// const path = "a -> b -> c"

// console.log(path.split(' -> ').reduce((acc, val) => acc = acc[val], object));



const ensureExists = async (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}
exports.ensureExists = ensureExists;