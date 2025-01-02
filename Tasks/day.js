// Refactor following solution
// Get day number

// Step 3. fix naming

"use strict";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayNumber = (day) => {
  for (let index = 0; index < DAYS_OF_WEEK.length; index++) {
    if (day.startsWith(DAYS_OF_WEEK[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
