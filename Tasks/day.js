'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (string) => {
  let result = -1;
  
  for (const day of DAYS) {
    if (string.includes(day)) {
      result = DAYS.indexOf(day) + 1;
    }
  }
  
  return result;
};

module.exports = parseDay;
