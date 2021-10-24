const ms = require('ms');

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

const addObjectsTogether = (...args) => {
    let output = {}
    args.map((object) => {
        let objectKeys = Object.keys(object);
        objectKeys.map((key) => {
            if (!output[key]) output[key] = 0;
            output[key] += object[key];
        });
    });
    return output;
}
exports.addObjectsTogether = addObjectsTogether;


/**
 * very likely susceptible to an SQL injection as this uses eval. 
 */
const recursiveUnsafeAddObjectsTogether = (...args) => {
    let allPaths = [];
    let leadingPaths = [];
    const addAllPaths = (existingPath, input) => {
        for (key of Object.keys(input)) {
            const newPath = `${existingPath}['${key}']`;
            if (typeof input[key] === 'number') {
                if (allPaths.includes(newPath)) continue;
                allPaths.push(newPath);
            }
            if (typeof input[key] === 'object') {
                if (!leadingPaths.includes(newPath)) leadingPaths.push(newPath);
                addAllPaths(newPath, input[key]);
            }

        }
    }
    for (let i = 0; i < args.length; i++) {
        addAllPaths('', args[i]);
    }

    let output = {};
    for (leadingPath of leadingPaths) {
        eval(`output${leadingPath} = {}`);
    }
    for (arg of args) {
        for (path of allPaths) {
            // console.log('arg: ', arg, ' path: ', path)
            // console.log(output['teamMultiplier']['hp']);
            eval(`if (!output${path}) output${path} = 0`);
            eval(`output${path} += arg${path}`);
        }
    }
    return output;
}
exports.recursiveUnsafeAddObjectsTogether = recursiveUnsafeAddObjectsTogether;

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