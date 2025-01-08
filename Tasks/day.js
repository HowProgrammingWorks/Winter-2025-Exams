'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (string) => {
  let i;
  for (const day of DAYS) {
    if (string.startsWith(day.toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
