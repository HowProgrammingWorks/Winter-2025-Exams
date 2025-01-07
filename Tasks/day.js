// Refactor following solution
// Get day number

// Step 6: modified DAYS to not use toLowerCase, done

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (str) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i])) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
