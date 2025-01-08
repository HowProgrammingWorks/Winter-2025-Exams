// Refactor following solution
// Delete listed keys from dictionary

const DroP = (D, ...X) => {
  const keys = Object.keys(D);
  keys.forEach((key) => {
    if (X.includes(key)) {
      delete D[key];
    }
  });
  return D;
};

module.exports = DroP;

