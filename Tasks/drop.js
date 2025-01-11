// Refactor following solution
// Delete listed keys from dictionary
"use strict";

const drop = (dictionary, ...listedKeys) => {
  let result = {};
  const keys = Object.keys(dictionary);
  const listed = [...listedKeys];
  for (let key of keys) {
    if (!listed.includes(key)) {
      result[key] = dictionary[key];
    }
  }
  return result;
};

module.exports = drop;
