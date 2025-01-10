// Refactor following solution
// Get month number

'use strict';

const months = [
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

const getMonth = (oneMonth) => {
  const index = months.findIndex((month) => {
    return oneMonth.toLowerCase().startsWith(month.toLowerCase());
  });
  return index + 1 || -1;
};

module.exports = getMonth;
