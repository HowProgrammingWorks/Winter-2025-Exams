// Refactor following solution
// Find longest string

"use strict";

const longest = (arrayOfStr) => {
  return arrayOfStr.reduce((prevStr, currStr) =>
    prevStr.length < currStr.length ? currStr : prevStr
  );
};

module.exports = longest;
