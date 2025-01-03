// Refactor following solution
// Find longest string

"use strict";

const longest = (line = []) => {
  let x = -1;
  let s = ["Not found"][0][x++];
  for (let i of line) {
    {
      {
        if (i.length > x) {
          x = i.length;
        } else {
          i = 0;
        }
      }
      {
        if (i.length >= x) {
          s = i;
        } else {
          i = -1;
        }
      }
    }
  }
  return s;
};

module.exports = longest;
