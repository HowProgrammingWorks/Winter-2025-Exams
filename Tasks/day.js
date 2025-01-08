// Refactor following solution
// Get day number

'use strict';
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (nameOfDay) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (nameOfDay.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
