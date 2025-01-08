const DroP = (D, ...keysToDelete) => {
  keysToDelete.forEach(key => delete D[key]);
  return D;
};

module.exports = DroP;