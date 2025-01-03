// Refactor following solution
// Get month number

// Step 2
// Rename variable

'use strict';

const Months = [
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
  const l = Months.length;
  for (let i = 0; i < l; i++) {
    if (month.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
