"use strict";

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Returns day number
const parseDay = (s) => {
  const index = DAYS.indexOf(s);
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
