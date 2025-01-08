'use strict'

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const monthNumber = (monthName) => {
  if (typeof monthName !== 'string') return -1;

  const index = months.findIndex(month => monthName.toLowerCase().startsWith(month));
  return index === -1 ? -1 : index + 1;
};

module.exports = monthNumber;
