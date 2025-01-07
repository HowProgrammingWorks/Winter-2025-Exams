// Refactor following solution
// Filter array by type name

// step 1: add 'use strict'

'use strict';

Filter = (T, t) => {
  remove = [];
  for (C of T) {
    x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
