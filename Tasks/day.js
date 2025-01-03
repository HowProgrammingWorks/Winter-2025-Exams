// Refactor following solution
// Get day number

// Step 5
// Rename days to lower case

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  for (let i = 0; i < days.length; i++) {
    if (day.startsWith(days[i])) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
