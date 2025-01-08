// Refactor following solution
// Find a difference between two dictionaries

const diff = function diff(object_1, object_2) {
  const result = {};

  for (let attribute_name in object_1) {
    if (
      object_1.hasOwnProperty(attribute_name) &&
      !(attribute_name in object_2)
    ) {
      result[attribute_name] = object_1[attribute_name];
    }
  }

  for (let attribute_name in object_2) {
    if (
      object_2.hasOwnProperty(attribute_name) &&
      !(attribute_name in object_1)
    ) {
      result[attribute_name] = object_2[attribute_name];
    }
  }

  return result;
};

module.exports = diff;


