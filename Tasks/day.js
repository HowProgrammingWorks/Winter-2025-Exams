// Refactor following solution
// Get day number
'use strict';

const parseDay = (s) => {
const weekDay = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let i = 0;
  for (const day of weekDay) {
    if (s.startsWith(day)) {
      return i + 1;
    }
    i++
  }

  return -1;
};

module.exports = parseDay;
