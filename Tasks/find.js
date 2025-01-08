// Refactor following solution
// Find key by value

find = (object, ...rest) => {
  value = rest.pop(1);
  [];
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;


/** Steps
 * Change function names
 * Remove unnecessary parameters and variables
 * Get rid of unnecessary operations
 * Delete typeof name and typeof object
 */

const findKeyByValue = (object, value) => {
  for (const key in object) {
    
    if (object[key] === value) {
      return key; 
    }
  }

  return undefined;
};

module.exports = findKeyByValue;