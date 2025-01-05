// Step 4
// Convert to arrow function

'use strict';

const longest = (line = []) => {
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
