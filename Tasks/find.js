// Refactor following solution
// Find key by value

const findKeyByValue = (obj, value) => {
  if(typeof obj !== 'object') return undefined
  
  let result = []
  const objKeys = Object.keys(obj)
  
  for(const key of objKeys) {
    if(obj[key] === value) result.push(key)
  }

  if (result.length === 1) return result[0];

  return result.length > 1 ? result : undefined;
};

module.exports = findKeyByValue;
