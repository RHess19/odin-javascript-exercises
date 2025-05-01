const reverseString = function(string) {
    if(string === "")
    {
        return "";
    }

    let reversedString = [];
    let stringArray = string.split("");

    for (const char of stringArray)
    {
        reversedString.unshift(char);
    }

    let result = reversedString.join("");

    return result;
};

// Do not edit below this line
module.exports = reverseString;
