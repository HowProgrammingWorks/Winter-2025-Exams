// Refactor following solution
// Get day number
"use strict";

const WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const parseDay = (s) => {
  const i = WEEK.indexOf(s);
  return i + 1 || -1;
};

module.exports = parseDay;
