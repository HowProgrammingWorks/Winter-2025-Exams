// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict'

const invert = (A) => {
 let T = [];
 for (let i = A.length - 1; i >= 0; i--) {
   T.push(A[i]);
 }
  return T;
};

module.exports = invert;
