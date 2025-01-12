"use strict";

// Reverses dictionary, exchange keys and values
const reverse = (dict) => {
  const reversed = {};
  for (const key in dict) {
    if (Object.hasOwn(dict, key)) {
      const value = dict[key];
      reversed[value] = key;
    }
  }
  return reversed;
};

module.exports = reverse;
