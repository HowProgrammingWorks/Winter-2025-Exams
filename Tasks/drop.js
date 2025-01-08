// Refactor following solution
// Delete listed keys from dictionary

const DroP = (D, ...X) => {
  const result = { ...D }; 
  const keys = Object.keys(result);

  keys.forEach((key) => {
    if (X.includes(key)) {
      delete result[key];
    }
  });

  return result;
};

module.exports = DroP;
