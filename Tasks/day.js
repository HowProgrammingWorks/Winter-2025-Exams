//STEP 3:
//"for" loop removed by "for of".
//Added finding index by "indexOf" method.

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
    for (const dayName of days) {
        if (day.startsWith(dayName)) {
            const index = days.indexOf(dayName);
            return index + 1;
        }
    }
    return -1;
}; 

module.exports = parseDay;
