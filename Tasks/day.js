// Step 3
//edit the if condition

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  for (const day of DAYS) {
    if (s.startsWith(day.toLowerCase())) {
      return DAYS.indexOf(day) + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
