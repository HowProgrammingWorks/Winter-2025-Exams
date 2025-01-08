let compare = (firstDict, secondDict) => {
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
  