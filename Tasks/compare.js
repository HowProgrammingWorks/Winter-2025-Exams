// Refactor following solution
// Compare two dictionaries

const compareDictionaries = (dict1, dict2) => {
  const keys1 = Object.keys(dict1);
  const keys2 = Object.keys(dict2);

  if (keys1.join('-') !== keys2.join('-')) return false;
  let areEqual = true;
  for (const key of keys1) {
    if (dict1[key] === dict2[key]) {
      areEqual = areEqual && true;
    } else {
      areEqual = areEqual && false;
    }
  }
  return areEqual;
};

module.exports = compareDictionaries;

