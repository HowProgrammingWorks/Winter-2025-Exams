'use strict';

// Step1: Add 'use strict'

const zip = function (a = [], b = []) {
  let i = 0;
  j = 0;
  for (x of b) {
    CELL = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = CELL))();
    }
    if (CELL[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;
