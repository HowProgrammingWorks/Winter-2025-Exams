'use strict';
// Refactor following solution
// Get day number

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (dayString) => {
  const index = days.findIndex(day => dayString.startsWith(days[i].toLowerCase()));
  return index === -1 ? -1 : index + 1;
};

module.exports = parseDay;
