// Refactor following solution
// Get month number

// Step 3
// remove var l

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

const getMonthNumber = (inputMonth) => {
  for (let i = 0; i < Months.length; i++) {
    if (inputMonth.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
