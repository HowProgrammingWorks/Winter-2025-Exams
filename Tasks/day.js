// Refactor following solution
// Get day number

// step 5: move declaration of let i inside the loop

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (str) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
