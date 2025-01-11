let compare = (firstDict, ...parametersList) => {
    const secondDict = parametersList[0];
    const firstKeys = Object.keys(firstDict);
    const secondKeys = Object.keys(secondDict);
  
    if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  
    for (const key of firstKeys) {
      if (firstDict[key] !== secondDict[key]) {
        return false;
      }
    }
  
    return true;
  };
  
  module.exports = compare;
  