// Refactor following solution
// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
  keys1 = Object.keys(obj1)
  for (key of keys1) {
    if (obj1[key] === obj2[key]) {
      obj2[key] = obj1[key]
    } else {
      delete obj1[key]
    }
  }

  return obj1
}

module.exports = intersection;
