let compare = (firstDict, secondDict) => {
    const firstKeys = Object.keys(firstDict);
    const secondKeys = Object.keys(secondDict);
  
    if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  
    return firstKeys.every(key => firstDict[key] === secondDict[key]);
  };
  
  module.exports = compare;
  