//STEP 4(v2):
//"for" loop wasn`t removed, and that’s also a good idea to let it stay here.
//Added day`s type checker.

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
    if (typeof day !== "string") {
        return -1;
    };
    for (let i = 0; i < days.length; i++) {
        if (day.startsWith(days[i])) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
