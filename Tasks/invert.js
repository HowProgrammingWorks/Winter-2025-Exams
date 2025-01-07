// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict'

const invert = (A) => {
 let T = [];
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return T;
};

module.exports = invert;
