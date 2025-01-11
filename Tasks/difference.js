// Refactor following solution
// Find a difference between two dictionaries

const diff = (obj1 = {}, obj2 = {}) => {
  let result = {};
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  for (let key of keys1) {
    if (!keys2.includes(key)) {
      result[key] = obj1[key];
    }
  }
  return result;
};

module.exports = diff;
