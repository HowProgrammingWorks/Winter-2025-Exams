// Refactor following solution
// Get month number

// Step 3
// Remove variable l

'use strict';

const MONTHS = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

const getMonthNumber = (month) => {
    for (let i = 0; i < MONTHS.length; i++) {
        if (month.toLowerCase().startsWith(MONTHS[i])) return i + 1;
    }
    return -1;
};

module.exports = getMonthNumber;