



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
