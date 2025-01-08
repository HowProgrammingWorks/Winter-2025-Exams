// Refactor following solution
// Find key by value

const find = (object, value) => {
  const keys = Object.keys(object);
  
  for(let i = 0; i < keys.length; i++) {
    if (object[keys[i]] === value) {
      return keys[i];
    }
  }
  
  return undefined;
};

module.exports = find;
