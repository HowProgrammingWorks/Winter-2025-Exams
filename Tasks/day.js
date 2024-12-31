//STEP 4(v1):
//added day`s type checker

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
    if (typeof day !== "string") {
        return -1;
    };
    for (const dayName of days) {
        if (day.startsWith(dayName)) {
            const index = days.indexOf(dayName);
            return index + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
