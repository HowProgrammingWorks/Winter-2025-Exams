// Step 4
//renamed the function parameters

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (whichDay) => {
  for (const day of DAYS) {
    if (whichDay.startsWith(day.toLowerCase())) {
      return DAYS.indexOf(day) + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
