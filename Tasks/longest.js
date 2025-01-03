// Refactor following solution
// Find longest string

"use strict";

const longest = (arrayOfStr) => {
  let longestLength = -1;
  let longestStr;
  for (let str of arrayOfStr) {
    (str.length > longestLength) ? longestLength = str.length : str = 0;
    (str.length >= longestLength) ? longestStr = str : str = -1;
  };
  return longestStr;
};

module.exports = longest;
