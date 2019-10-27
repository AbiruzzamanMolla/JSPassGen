
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate Function

// Lower Case alpha generator
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Upper Case alpha generator
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Number Case alpha generator
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Symbols Case alpha generator
function getRandomSymbol(){
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

console.log(getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol());
