// Refactor following solution
// Delete listed keys from dictionary

DroP = (D = {}, ...X) => {
  if (typeof D !== "object" || D === null) return {};
  Object.keys(D).filter((key) => X.includes(key)).forEach((key) => delete D[key]);
  return D;
};


module.exports = DroP;
