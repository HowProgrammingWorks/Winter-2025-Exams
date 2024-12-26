// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (str) => {
  const findDay = DAYS.find((day) => str.startsWith(day));
  return findDay ? DAYS.indexOf(findDay) + 1 : -1;
};

module.exports = parseDay;
