// Refactor following solution
// Get day number

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const ParseDay = (day) => {
  const index = days.findIndex((d) => day.startsWith(d));
  return index === -1 ? index : index + 1;
};

module.exports = ParseDay;
