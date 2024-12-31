//STEP 1:
//Fix naming.
//Add "const"s.
//Remove early "i" declaration.

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (day) => {
    for (let i = 0; i < days.length; i++) {
        if (day.startsWith(days[i].toLowerCase())) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
