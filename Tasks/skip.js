// Refactor following solution
// Return an remove without listed values

// Step 2. add consts and let

"use strict";

const Skip = (T, ...Remove) => {
  let x = 0;
  for (const C of T) {
    for (const X of Remove) {
      if (C === X) {
        T.splice(x, 1);
      }
    }
    x++;
  }
  return T;
};

module.exports = Skip;
