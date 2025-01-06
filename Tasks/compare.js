const compare = (firstDict, ...otherArgs) => {
  const secondDict = otherArgs[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  const areKeysEqual = firstKeys.join('-') === secondKeys.join('-');
  if (!areKeysEqual) return false;

  let areValuesEqual = true;
  for (const key of firstKeys) {
    if (firstDict[key] !== secondDict[key]) {
      areValuesEqual = false;
      break;
    }
  }
  return areValuesEqual;
};

module.exports = compare;
