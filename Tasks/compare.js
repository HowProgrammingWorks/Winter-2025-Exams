// Refactor following solution
// Compare two dictionaries

const compareDictionaries = (dict1, dict2) => {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);

  if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
    return false;
  }

  return keys1.every(key => dict1[key] === dict2[key]);
};

module.exports = compareDictionaries;
