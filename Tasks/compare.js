const compare = (firstDict, ...otherArgs) => {
  const secondDict = otherArgs[0];
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let areEqual = true;
  for (const key of firstKeys) {
    if (firstDict[key] !== secondDict[key]) {
      areEqual = false;
      break;
    }
  }
  return areEqual;
};

module.exports = compare;
