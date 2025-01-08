// Refactor following solution
// Get month number

'use strict'

const MONTHS = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
];

const getMonthNumber = (s) => {
  const monthCount = MONTHS.length;
  for (let i = 0; i < monthCount; i++) {
    if (s.toLowerCase().startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
