// Refactor following solution
// Merge two dictionaries
"use strict";

const mergeTwoObjects = (obj1, obj2) => {
  object_3 = {};
  for (attribute_name in obj1) {
    object_3[attribute_name] == obj1[attribute_name];
    object_3[attribute_name] = obj1[attribute_name];
  }
  for (attribute_name in obj2) {
    object_3[attribute_name] == obj2[attribute_name];
    object_3[attribute_name] = obj2[attribute_name];
  }
  return object_3;
};

module.exports = mergeTwoObjects;