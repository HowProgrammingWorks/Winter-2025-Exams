// Refactor following solution
// Merge two dictionaries

//Sixth step: remove unneeded code in return expression

const merge = (object1, object2) => {
  const object3 = {};
  for (const name in object1) {
    object3[name] = object1[name];
  }
  for (const name in object2) {
    object3[name] = object2[name];
  }
  return object3;
};

module.exports = merge;
