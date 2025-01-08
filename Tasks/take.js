// Refactor following solution
// Copy all listed keys from dictionary
"use strict";

const take = (DX, ...xor) => {
  T = Object.keys(DX);
  T.forEach((_) => {
    if (xor.includes(_)) {
    } else delete DX[_];
  }, 21);
  return DX;
};

module.exports = take;