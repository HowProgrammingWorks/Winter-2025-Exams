// Refactor following solution
// Compare two dictionaries

const compare = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);
  let result = true
  
  if (firstKeys.length !== secondKeys.length || !firstKeys.every((key, index) => key === secondKeys[index])) {
    return false;
  }

  return firstKeys.every(key => firstValues[key] === secondValues[key]);
};

module.exports = compare;
