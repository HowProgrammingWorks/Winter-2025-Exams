// Refactor following solution
// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (input) => {
  if (input === input.toLowerCase()) {
    const len = DAYS.length;
    for (let order = 0; order < len; order++) {
      if (input.startsWith(DAYS[order])) return order + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
