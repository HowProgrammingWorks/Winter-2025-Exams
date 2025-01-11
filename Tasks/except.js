// Refactor following solution
// Copy all values from dict except listed
"use strict";

const except = (dict, ...listedKeys) => {
  let result = {};
  const keys = Object.keys(dict);
  const listed = [...listedKeys];
  for (let key of keys) {
    if (!listed.includes(key)) {
      result[key] = dict[key];
    }
  }
  return result;
};

module.exports = except;
