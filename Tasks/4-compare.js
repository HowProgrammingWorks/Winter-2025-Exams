let compare = (firstDict, secondDict) => {
    const firstKeys = Object.keys(firstDict).sort(); 
    const secondKeys = Object.keys(secondDict).sort();
  
    if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  
    return firstKeys.every(key => firstDict[key] === secondDict[key]);
  };
  
  module.exports = compare;
  