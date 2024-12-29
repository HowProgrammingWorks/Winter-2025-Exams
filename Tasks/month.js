'use strict';

// Step4: Create a variable for lowercase input

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
  const lowerCaseInput = input.toLowerCase();
  const numberOfMonths = MONTHS.length;
  for (let index = 0; index < numberOfMonths; index++) {
    if (lowerCaseInput.startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
