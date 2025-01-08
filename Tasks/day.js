// Refactor following solution
// Get day number

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (dayString) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (dayString.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
