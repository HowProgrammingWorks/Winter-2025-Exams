// Step 1
//add const
//improve naming

'use strict';

let DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (s.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
