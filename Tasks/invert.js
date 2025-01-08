// Refactor following solution
// Reverse an array, you can't use .reverse()

invert = (A) => {
  T = Object.keys(A);
  T.forEach((_, i) => {
    T[i] = A.pop();
  })
  return T;
};

module.exports = invert;
