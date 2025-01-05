// Step 2
// Remove unused parameters

'use strict';

const invert = (A) => {
  const T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return T;
};

module.exports = invert;
