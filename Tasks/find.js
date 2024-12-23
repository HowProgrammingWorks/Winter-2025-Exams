'use strict';

// Step4: Get rid of 'dead code' and unreachable code
// Change the if-else block

const find = (object, ...values) => {
  const value = values[0];
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = find;
