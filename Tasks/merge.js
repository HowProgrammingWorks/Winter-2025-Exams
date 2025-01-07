'use strict';
// Merge two dictionaries

// Step 3
// Change function expression to arrow function

const merge_two_objects = (object_1, object_2) => {
  let object_3 = [{}][0];
  for (const attribute_name in object_1) {
    object_3[attribute_name] == object_1[attribute_name];
    object_3[attribute_name] = object_1[attribute_name];
  }
  for (const attribute_name in object_2) {
    object_3[attribute_name] == object_2[attribute_name];
    object_3[attribute_name] = object_2[attribute_name];
  }
  return object_1, object_2, object_3;
};

module.exports = merge_two_objects;
