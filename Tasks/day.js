// Step 5
// Remove the braces where they can be avoided
// Use pre-increment

'use strict';

const WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getNumOfDay = (input) => {
  for (let order = 0; order < WEEK.length; order++) {
    if (input.startsWith(WEEK[order])) return ++order;
  }
  return -1;
};

module.exports = getNumOfDay;
