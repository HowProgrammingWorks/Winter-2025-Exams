// Step 6
// Use intermediate variable

'use strict';

const WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getNumOfDay = (input) => {
  const len = WEEK.length;
  for (let order = 0; order < len; order++) {
    if (input.startsWith(WEEK[order])) return ++order;
  }
  return -1;
};

module.exports = getNumOfDay;
