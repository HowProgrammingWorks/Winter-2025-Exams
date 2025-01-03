// Refactor following solution
// Get day number

// Step 4
// remove toLowerCase
// rename days to lower case

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

parseDay = (day) => {
  for (let i = 0; i < days.length; i++) {
    if (day.startsWith(days[i])) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
