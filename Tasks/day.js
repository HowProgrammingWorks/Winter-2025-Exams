// Refactor following solution
// Get day number

// Step 1
// Rename variables
// Add 'use strict'

'use strict';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (day) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (day.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
