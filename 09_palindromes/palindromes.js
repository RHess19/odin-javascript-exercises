const palindromes = function (string) {
    const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let stringArray = string.toLowerCase().split('').filter((character) => allowedChars.includes(character)).join('');

    let stringArrayReversed = stringArray.split('').reverse().join('');

    return stringArray === stringArrayReversed;
};

// Do not edit below this line
module.exports = palindromes;
