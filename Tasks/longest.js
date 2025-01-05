// Step 3
// Fix initialization of variables

'use strict';

const longest = function (line = []) {
  let x = -1;
  let s = undefined;
  for (const i of line) {
    if (i.length > x) {
      x = i.length;
      s = i;
    }
  }
  return s;
};

module.exports = longest;
