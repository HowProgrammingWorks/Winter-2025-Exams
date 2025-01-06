let compare = (firstDict, ...otherArgs) => {
  const secondDict = otherArgs[0];
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let areEqual = true;
  for (let key of firstKeys) {
    if (firstDict[key] !== secondDict[key]) {
      areEqual = false;
      break;
    }
  }
  return areEqual;
};

module.exports = compare;
