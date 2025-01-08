// Refactor following solution
// Delete listed keys from dictionary

DroP = (D, ...X) => {
  Object.keys(D).forEach((key) => {
    if (X.includes(key)) {
      delete D[key];
    }
  });
  return D;
};

module.exports = DroP;
