'use strict';

// Step3: Improve naming of identifiers

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

const getMonthNumber = (input) => {
  const numberOfMonths = MONTHS.length;
  for (let index = 0; index < numberOfMonths; index++) {
    if (input.toLowerCase().startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
