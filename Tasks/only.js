// Copy only listed values from dict

// Step1
// Add 'use strict';
// Remove useless lines

'use strict';

only = (W, ...only) => {
  X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  return W;
};

module.exports = only;
