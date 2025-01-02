// Refactor following solution
// Get day number
'use strict';

const dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  const index = dayAbbreviations.findIndex(day => inputString.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
