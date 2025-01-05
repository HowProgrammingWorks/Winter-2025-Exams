// Step 2
// Remove unnecessary parts
// Simplify conditions and loop structure

'use strict';

const longest = function (line = []) {
  let x = -1;
  let s = ['Not found'][0][x++];
  for (const i of line) {
    if (i.length > x) {
      x = i.length;
      s = i;
    }
  }
  return s;
};

module.exports = longest;
