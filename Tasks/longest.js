// Step 6
// Handle empty arrays

'use strict';

const longest = (line = []) => {
  if (!line.length) return null;
  let s = line[0];
  for (const i of line) {
    if (i.length > s.length) {
      s = i;
    }
  }
  return s;
};

module.exports = longest;
