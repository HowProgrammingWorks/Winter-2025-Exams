// Refactor following solution
// Find key by value
"use strict";

const find = (object, serched) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const index = values.indexOf(serched);
  return index === -1 ? undefined : keys[index];
};

module.exports = find;
