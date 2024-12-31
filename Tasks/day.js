//STEP 2:
//Change element of array to lower case,
//so having a "toLowerCase" method for "day[i]" is pointless now.


const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
    for (let i = 0; i < days.length; i++) {
        if (day.startsWith(days[i])) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
