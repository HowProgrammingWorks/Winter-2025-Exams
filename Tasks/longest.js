// Refactor following solution
// Find longest string

"use strict";

const longest = function (line = []) {
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
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = longest;
