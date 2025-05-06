const getTheTitles = function(arr) {
    let titles = [];
    
    arr.forEach(book => {
        titles.push(book.title);
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
