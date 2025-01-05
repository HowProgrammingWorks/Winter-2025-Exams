// Step 2
// Improve the names of identifiers

'use strict';

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getNumOfDay = (input) => {
  let order;
  for (order = 0; order < WEEK.length; order++) {
    if (input.startsWith(WEEK[order].toLowerCase())) {
      return order + 1;
    }
  }
  return -1;
};

module.exports = getNumOfDay;
