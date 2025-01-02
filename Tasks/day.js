// Refactor following solution
// Get day number
'use strict';

const dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  for (let i = 0; i < dayAbbreviations.length; i++) {
    if (inputString.startsWith(dayAbbreviations[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
