// Compare two dictionaries

let compare = (firstValue, ...parametersList) => {
  const secondValue = parametersList[0];
  const firstKeys = Object.keys(firstValue);
  const secondKeys = Object.keys(secondValue);

  if (firstKeys.join() !== secondKeys.join()) return false;

  for (const key of firstKeys) {
    if (firstValue[key] !== secondValue[key]) return false;
  }
  return true;
};

module.exports = compare;
