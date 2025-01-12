"use strict";

// Reverses an array without using .reverse()
const invert = (A) => {
  const T = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    T[i] = A[A.length - 1 - i];
  }
  return T;
};

module.exports = invert;
