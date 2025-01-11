// Refactor following solution
// Convert number to file size in bytes, kb, mb, and gb
"use strict";

const SIZES = ["byte", "kb", "mb", "gb"];

const size = (size) => {
  let temp = size;
  let counter = 0;
  if (size === 0) return "0 byte";
  while (temp > 1000) {
    temp = Math.round(temp / 1000);
    counter++;
  }
  return temp + " " + SIZES[counter];
};

module.exports = size;
