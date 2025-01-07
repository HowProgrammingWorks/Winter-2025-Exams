// Refactor following solution
// Get day number

// step 4: rename data in array and delete toLowerCase() for easier index search

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (str) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
