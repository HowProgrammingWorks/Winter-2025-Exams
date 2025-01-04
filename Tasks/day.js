// Step 3
//entering the for..of loop

'use strict';

let DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  for (const day of DAYS ) {
    if (s.startsWith(DAYS[day].toLowerCase())) {
      return day + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
