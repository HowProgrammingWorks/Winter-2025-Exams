// Refactor following solution
// Find key by value
"use strict";

const find = (object, ...rest) => {
  value = rest.pop(1);
  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
};

module.exports = find;