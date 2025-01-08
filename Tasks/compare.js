// Refactor following solution
// Compare two dictionaries

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
  if (firstKeys.length !== secondKeys.length || !firstKeys.every(key => secondKeys.includes(key))) {
    return false;
  }

  return firstKeys.every(key => firstValues[key] === secondValues[key]);
}

module.exports = compare;
