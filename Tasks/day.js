// Refactor following solution
// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  const index = DAYS.findIndex((d) => day.startsWith(d));
  return index + 1 || -1;
};

module.exports = parseDay;
