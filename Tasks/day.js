// Refactor following solution
// Get day number

// Step 4. refix naming and rewrite into functional style with ternary operator

"use strict";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayNumber = (day) => {
  const index = DAYS_OF_WEEK.findIndex((substr) =>
    day.startsWith(substr.toLowerCase()),
  );
  return index !== -1 ? index + 1 : -1;
};

module.exports = getDayNumber;
