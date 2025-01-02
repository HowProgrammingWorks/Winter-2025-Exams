// Refactor following solution
// Reverse an array, you can't use .reverse()

// Step 1. add "use strict"

"use strict";

invert = (A, i, j, k) => {
  T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return T;
};

module.exports = invert;
