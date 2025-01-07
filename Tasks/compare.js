// Refactor following solution
// Compare two dictionaries

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);

  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  for (const key in firstValues) {
    if (firstValues[key] !== secondValues[key]) return false;
  }

  return true;
};

module.exports = compare;
