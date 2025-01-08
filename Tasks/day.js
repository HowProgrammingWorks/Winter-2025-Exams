'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (string) => {
  let result = -1;
  
  for (const day of DAYS) {
    if (string.startsWith(day.toLowerCase())) {
      result = DAYS.indexOf(day) + 1;
    }
  }
  
  return result;
};

module.exports = parseDay;
