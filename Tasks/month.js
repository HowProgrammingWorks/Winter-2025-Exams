// STEP 4:
//It is better to remove loop and use "findIndexOf"
//It is better to rename const "list" to "MONTHS"

const MONTHS = [
    'jan', 'feb', 'mar', 'apr',
    'may', 'jun', 'jul', 'aug',
    'sep', 'oct', 'nov', 'dec',
];

const position = (month) => {
    const lowMonth = month.toLowerCase();
    const index = MONTHS.findIndex((part) => lowMonth.startsWith(part));
    return (index + 1) || -1;
};

module.exports = position;
