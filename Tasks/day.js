// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (str) => {
  let num = -1;
  for (let i = 0; i < DAYS.length; i++) {
    if (str.startsWith(DAYS[i])) num = ++i;
  }
  return num;
};

module.exports = parseDay;
