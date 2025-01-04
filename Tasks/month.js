// Refactor following solution
// Get month number

"use strict";

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

const getMonthNumber = (str) => {
  const length = MONTHS.length;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < length; i++) {
    if (lowerStr.startsWith(MONTHS[i])) return i + 1;
  };
  return -1;
};

module.exports = getMonthNumber;
