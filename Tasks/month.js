// Refactor following solution
// Get month number

'use strict'

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
  for (let i = 0; i < months.length; i++) {
    if (oneMonth.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonth;
