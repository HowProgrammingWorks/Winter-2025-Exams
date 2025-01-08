'use strict'


// Refactor following solution
// Get day number

let Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayIndex = (str) => {
  let i;
  for (i = 0; i < Days.length; i++) {
    if (str.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayIndex;
