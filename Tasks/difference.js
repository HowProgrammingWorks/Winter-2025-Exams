// Refactor following solution
// Find a difference between two dictionaries

const diff = function (object1, object2) {
  for (key in object2) {
    delete object1[key];
  }

  return object1;
};

module.exports = diff;
