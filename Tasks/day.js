// Refactor following solution
// Get day number

// step 6: rewrite function to functional programming style

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getDayNumber = (str) =>
  DAYS.findIndex((day) => str.startsWith(day)) + 1 || -1;

module.exports = getDayNumber;
