const findTheOldest = function (people) {
    let sorted = people.sort((a, b) => {
        if (!(a.yearOfDeath)) {
            let currentYear = 2025;

            if (currentYear - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
                return -1;
            }
            else if (currentYear - a.yearOfBirth === b.yearOfDeath - b.yearOfBirth) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else if (!(b.yearOfDeath)) {
            let currentYear = 2025;

            if (a.yearOfDeath - a.yearOfBirth > currentYear - b.yearOfBirth) {
                return -1;
            }
            else if (a.yearOfDeath - a.yearOfBirth === currentYear - b.yearOfBirth) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
                return -1;
            }
            else if (a.yearOfDeath - a.yearOfBirth === b.yearOfDeath - b.yearOfBirth) {
                return 0;
            }
            else {
                return 1;
            }
        }

    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
