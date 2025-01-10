// Refactor following solution
// Get day number

//Step 3
//Implement without loops

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  const index = days.findIndex((day) => s.startsWith(day.toLowerCase()));

  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
