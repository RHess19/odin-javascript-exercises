const removeFromArray = function(inputArray, ...toRemove) {
    let originalArray = inputArray;
    let resultArray = [];

    for(const removeItem of toRemove)
    {
        for(const char of originalArray)
        {
            // If the current iterated element of toRemove is NOT the current char of the input array, add it to a result arrray
            if(char !== removeItem)
            {
                resultArray.push(char);
            }
        }

        // Move the results from the current pass back to original array to be tested on for the next bad character from toRemove
        originalArray = resultArray;
        resultArray = [];
    }

    return originalArray; // Return original array since resultArray has been reset
};

// Do not edit below this line
module.exports = removeFromArray;
