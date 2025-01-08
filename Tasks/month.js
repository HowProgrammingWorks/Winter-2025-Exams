'use strict'
// Refactor following solution
// Get month number

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const month = (s) => {
  if (typeof s !== 'string') return -1;
  
  const index = month.findIndex(month => s.toLowerCase().startsWith(month));
  return index === -1 ? -1 : index + 1;
};

module.exports = month;
