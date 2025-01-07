// Refactor following solution
// Get month number
'use strict'

const Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',];

const Month = (s) => {
  const sLowerCased = s.toLowerCase();
  for (let i = 0; i < Months.length; i++) {
    if (sLowerCased.startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
