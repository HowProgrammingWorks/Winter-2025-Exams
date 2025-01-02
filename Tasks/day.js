// Refactor following solution
// Get day number
'use strict';

let dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (inputString) => {
  let i;
  for (i = 0; i < dayAbbreviations.length; i++) {
    if (inputString.startsWith(dayAbbreviations[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
