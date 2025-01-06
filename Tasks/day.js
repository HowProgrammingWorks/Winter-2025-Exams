// Refactor following solution
// Get day number

// Step 5: used single-line if statement

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
