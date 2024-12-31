// STEP 3:
//change list`s form

const list = [
    'jan', 'feb', 'mar', 'apr', 
    'may', 'jun', 'jul', 'aug', 
    'sep', 'oct', 'nov', 'dec',
];

const position = (month) => {
    const lowMonth = month.toLowerCase();
    const scope = list.length;
    for (let i = 0; i < scope; i++) {
        if (lowMonth.startsWith(list[i])) {
            return i + 1
        }
    }
    return -1;
};

module.exports = position;
