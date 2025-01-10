// Refactor following solution
// Get day number
'use strict';

const parseDay = (s) => {
  const weekDay = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  s = s.slice(0, 3);
  const indexOfElement = weekDay.indexOf(s);

  if (indexOfElement !== -1) {
    return indexOfElement + 1;
  }

  return -1;
};

module.exports = parseDay;
