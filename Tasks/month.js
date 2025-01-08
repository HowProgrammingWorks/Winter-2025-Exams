// Refactor following solution
// Get month number

Months = [
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

Month = (s) => {
  l = Months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;


/** Steps
 * Change function names and variables
 * Use const
 * Use findIndex to find the corresponding month  
 * Add variable normalizedInput 
 * Return the month number (1-based) or -1 if not found
 */ 

const months = [
  'jan', 'feb', 'mar', 'apr', 'may', 
  'jun', 'jul', 'aug', 'sep', 'oct', 
  'nov', 'dec'
];

const getMonthNumber = (input) => {
  const normalizedInput = input.toLowerCase();

  const index = months.findIndex(month => normalizedInput.startsWith(month));

  return index !== -1 ? index + 1 : -1;
};

module.exports = getMonthNumber;