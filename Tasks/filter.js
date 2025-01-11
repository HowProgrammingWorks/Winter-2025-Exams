// Refactor following solution
// Filter array by type name
"use strict";

const filter = (data, t) => {
  const result = [];
  for (let value of data) {
    if (typeof value === t) {
      result.push(value);
    }
  }
  return result;
};

module.exports = filter;
