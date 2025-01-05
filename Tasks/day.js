// Step 3
// Change `WEEK` elements to LowerCase
// Remove unnecessary .toLowerCase()

'use strict';

const WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getNumOfDay = (input) => {
  let order;
  for (order = 0; order < WEEK.length; order++) {
    if (input.startsWith(WEEK[order])) {
      return order + 1;
    }
  }
  return -1;
};

module.exports = getNumOfDay;
