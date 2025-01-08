const only = (dictionary, ...keysToKeep) => {
  const result = {};
  keysToKeep.forEach((key) => {
    if (key in dictionary) {
      result[key] = dictionary[key];
    }
  });
  return result;
};

module.exports = only;
