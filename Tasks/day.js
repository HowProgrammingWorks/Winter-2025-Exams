// Step 4
// Improve iteration
// Move the `order` initialization inside of the loop

'use strict';

const WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getNumOfDay = (input) => {
  for (let order = 0; order < WEEK.length; order++) {
    if (input.startsWith(WEEK[order])) {
      return order + 1;
    }
  }
  return -1;
};

module.exports = getNumOfDay;
