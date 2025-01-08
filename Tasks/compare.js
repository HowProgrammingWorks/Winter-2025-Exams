// Refactor following solution
// Compare two dictionaries

let compareDict = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
    if (firstKeys.join('-') !== secondKeys.join('-')) return false;
    return firstKeys.every(key => firstValues[key] === secondValues[key]);
};

module.exports = compareDict;
