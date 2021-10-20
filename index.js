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

const pluck = (array, key) => {   
    return array.map(o => o[key]);
}
exports.pluck = pluck;