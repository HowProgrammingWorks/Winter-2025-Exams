"use strict";

// Finds a difference between two dictionaries
const diff = (object1, object2) => {
  const differences = {};

  for (const key in object1) {
    if (!(key in object2)) {
      differences[key] = object1[key];
    }
  }

  return differences;
};

module.exports = diff;
