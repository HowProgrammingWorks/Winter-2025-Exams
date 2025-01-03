// Refactor following solution
// Find longest string

"use strict";

const longest = (line = []) => {
  let x = -1;
  let s;
  for (let i of line) {
    (i.length > x) ? x = i.length : i = 0;
    (i.length >= x) ? s = i : i = -1;
  };
  return s;
};

module.exports = longest;
