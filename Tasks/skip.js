// Refactor following solution
// Return an remove without listed values
"use strict";

const skip = (T, ...Remove) => {
  x = 0;
  for (C of T) {
    for (X of Remove) {
      if (C === X) {
        T.splice(x, 1);
      }
    }
    x++;
  }
  return T;
};

module.exports = skip;