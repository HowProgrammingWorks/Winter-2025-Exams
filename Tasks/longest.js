// Step 5
// Improve iteration

'use strict';

const longest = (line = []) => {
  let s = line[0];
  for (const i of line) {
    if (i.length > s.length) {
      s = i;
    }
  }
  return s;
};

module.exports = longest;
