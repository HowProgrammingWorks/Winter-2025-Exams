// Refactor following solution
// Compare two dictionaries

const compare = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);
  let result = true


  if (firstObjKeys.join('-') !== secondObjKeys.join('-')) return false;
  for (const key of firstObjKeys) {
    if (obj1[key] === obj2[key]) result = result && true
    else {
      result = result && false
    }
  }

  
  return result;
};

module.exports = compare;
