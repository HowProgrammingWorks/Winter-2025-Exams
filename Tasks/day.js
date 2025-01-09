// Refactor following solution
// Get day number

// Step 5. shortize return statement

'use strict';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (day) => {
  const index = DAYS_OF_WEEK.findIndex((substr) =>
    day.startsWith(substr.toLowerCase()),
  );
  return index + 1 || -1;
};

module.exports = getDayNumber;
