// Copies all listed keys from dictionary
const take = (dict, ...keysToKeep) => {
  const result = {};

  keysToKeep.forEach((key) => {
    if (key in dict) {
      result[key] = dict[key];
    }
  });

  return result;
};

module.exports = take;
