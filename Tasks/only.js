// Refactor following solution
// Copy only listed values from dict

// step 3: remove unnecessary code block

'use strict';

const only = (W, ...only) => {
  const X = Object.keys(W);

  X.forEach((Z) => {
    if (!only.includes(Z)) {
      delete W[Z];
    }
  });

  return W;
};

module.exports = only;
