// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// call function randomly
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// event listner for generate button
generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    //show the pwd into textbox
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//function to suffle the pwd
function randomsort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

//copy to clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    // designed Notification panel
    window.createNotification({
        closeOnClick: true,
        positionClass: 'nfc-top-right',
        showDuration: 3500,
        theme: 'success'
    })({
        title: 'Notification',
        message: 'Password copied to clipboard'
    });
});

// function for generating password
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPwd = '';
    const typeCount = lower + upper + number + symbol;
    const typeArr = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        symbol
    }].filter(
        item => Object.values(item)[0]
    );
    if (typeCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i += typeCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPwd += randomFunc[funcName]();
        });
    }
    let finalPwd = generatedPwd.slice(0, length).split('').sort(randomsort);
    return finalPwd.join('');
}

// Lower Case alpha generator
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Upper Case alpha generator
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Number Case alpha generator
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Symbols Case alpha generator
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}