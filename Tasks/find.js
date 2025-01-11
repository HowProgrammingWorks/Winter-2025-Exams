// Refactor following solution
// Find key by value

'use strict';

const find = (obj, value) => {
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {return key}
  }
  return undefined
}

module.exports = find;
