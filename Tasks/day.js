// Refactor following solution
// Get day number

// Step 1. Add 'use strict'
// Step 2. Better naming for variables and function
// Step 3. Use pretier
// Step 4. Rewrite into functional style with ternary operator

'use strict';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (day) => {
  const index = DAYS_OF_WEEK.findIndex((substr) =>
    day.startsWith(substr.toLowerCase())
  );
  return index + 1 || -1;
};

module.exports = getDayNumber;
