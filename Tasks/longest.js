// Refactor following solution
// Find longest string

"use strict"

const longest = (array) => {
  let longestStr = array[0];

  for (const str of array) {
    if (str.length > longestStr.length) {
      longestStr = str;
    };
  };

  return longestStr;
};

module.exports = longest;
