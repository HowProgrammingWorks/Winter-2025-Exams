// Refactor following solution
// Get month number

'use strict';

const MONTHS = [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
];

const getMonthNumber = (monthStr) => {
  const normalizedStr = monthStr.toLowerCase().trim();
  const monthIndex = MONTHS.findIndex(month => normalizedStr.startsWith(month));
  return monthIndex !== -1 ? monthIndex + 1 : -1;
};

module.exports = getMonthNumber;
