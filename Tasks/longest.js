"use strict";

// Finds the longest string
const longest = (line = []) => {
  if (line.length === 0) return "Not found";

  let longestString = "";
  for (const str of line) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }

  return longestString;
};

module.exports = longest;
