// Refactor following solution
// Sum all number values in dict

"use strict";

const count = (dict) => {
  return Object.keys(dict)
    .map((key) => dict[key])
    .filter((val) => typeof val === "number")
    .reduce((previousVal, currentVal) => (previousVal += currentVal), 0);
};

module.exports = count;
