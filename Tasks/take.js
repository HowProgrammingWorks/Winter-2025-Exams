// Refactor following solution
// Copy all listed keys from dictionary

'use strict';

const take = (obj, ...listed) => {
  const answer = {}
  const keys = Object.keys(obj)
  for (const key of keys) {
    if (listed.includes(key)) answer[key] = obj[key]
  }
  return answer
};

module.exports = take
