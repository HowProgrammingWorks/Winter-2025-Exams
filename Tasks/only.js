// Refactor following solution
// Copy only listed values from dict

// step 2: add const declarations

'use strict';

const only = (W, ...only) => {
  [];
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return W;
};

module.exports = only;
