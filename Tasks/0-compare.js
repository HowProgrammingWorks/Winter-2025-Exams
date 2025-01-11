let compare = (firstDict, ...parametersList) => {
  const secondDict = parametersList[0]; 
  const firstKeys = Object.keys(firstDict); 
  const secondKeys = Object.keys(secondDict); 

  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  let isEqual = true; 
  for (const key of firstKeys) { 
    if (firstDict[key] === secondDict[key]) {
      isEqual = isEqual && true;
    } else {
      isEqual = isEqual && false;
    }
  }

  return isEqual;
};

module.exports = compare;
