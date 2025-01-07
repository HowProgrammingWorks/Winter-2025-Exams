'use strict';
// Merge two dictionaries

// Step 4
// Remove unnecessary code
// Change initial value of the 'object_3' variable

const merge_two_objects = (object_1, object_2) => {
  let object_3 = {};
  for (const attribute_name in object_1) {
    object_3[attribute_name] = object_1[attribute_name];
  }
  for (const attribute_name in object_2) {
    object_3[attribute_name] = object_2[attribute_name];
  }
  return object_3;
};

module.exports = merge_two_objects;
