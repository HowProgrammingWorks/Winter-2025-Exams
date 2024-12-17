// Refactor following solution
// Copy all listed keys from dictionary

'use strict';

take = (obj, ...listed) => {
  keys = Object.keys(obj)
  keys.forEach((key) => {
    if (listed.includes(key)) {
    } else delete obj[key]
  })
  return obj
};

module.exports = take
