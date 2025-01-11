// Refactor following solution
// Find longest string
"use strict";

const longest = (cities) => {
  let max = "";
  for (let city of cities) {
    if (city.length > max.length) {
      max = city;
    }
  }
  return max;
};

module.exports = longest;
