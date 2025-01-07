// Refactor following solution
// Reverse an array, you can't use .reverse()
"use strict";

const invert = (A) => {
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