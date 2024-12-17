// Refactor following solution
// Copy all listed keys from dictionary

'use strict';

take = (obj, ...listed) => {
  keys = Object.keys(obj)
  for (const key of keys) {
    if (!listed.includes(key)) delete obj[key] 
  }
  return obj
};

module.exports = take
