// Get day number

// Step 1
//
// Add 'use strict';
// Fix formatting
// Prefer const
// Improve naming

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  for (let i = 0; i < days.length; i++) {
    if (s.startsWith(days[i].toLowerCase())) {
      return i + 1; 
    }
  }
  return -1;
};

module.exports = parseDay;

