// Refactor following solution
// Get day number
'use strict';

const parseDay = (s) => {
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let i;
  for (i = 0; i < weekDay.length; i++) {
    if (s.startsWith(weekDay[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
