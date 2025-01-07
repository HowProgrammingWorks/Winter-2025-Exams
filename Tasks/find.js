// Refactor following solution
// Find key by value
'use strict'

function find(object, searchedValue) {
  for (let key in object) {
    if (object[key] === searchedValue) return key;
  }
  return undefined;
}

module.exports = find;
