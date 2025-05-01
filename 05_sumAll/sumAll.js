const sumAll = function (start, end) {
    if(start < 0 || end < 0 || Array.isArray(start) || Array.isArray(end) || typeof(start) === "string" || typeof(end) === "string" || !Number.isInteger(start) || !Number.isInteger(end))
    {
        return "ERROR";
    }

    let sum = 0;

    if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }
    else {
        for (let i = start; i >= end; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
