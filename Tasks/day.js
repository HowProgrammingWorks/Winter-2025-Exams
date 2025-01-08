// Refactor following solution
// Get day number

'use strict';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (nameOfDay) => {
  
  for (let i = 0; i < DAYS.length; i++) {
    if (nameOfDay.startsWith(DAYS[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
