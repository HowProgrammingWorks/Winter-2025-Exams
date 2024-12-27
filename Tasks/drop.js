// Refactor following solution
// Delete listed keys from dictionary

//Second step: add const for function and variables

const DroP = (D, ...X) => {
  const T = Object.keys(D);
  T.forEach(
    (_) => {
      if (X.includes(_)) {
        delete D[_];
      }
    }
  );
  return D;
};

module.exports = DroP;
