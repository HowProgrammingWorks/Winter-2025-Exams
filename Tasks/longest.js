// Refactor following solution
// Find longest string

"use strict";

const longest = (arrayOfStr) => {
  if (arrayOfStr.length === 0) return null;
  return arrayOfStr.reduce((prevStr, currStr) =>
    prevStr.length < currStr.length ? currStr : prevStr
  );
};

module.exports = longest;
