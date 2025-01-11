// Refactor following solution
// Merge two dictionaries

'use strict';

const merge = (obj1, obj2) => {
  let answer = obj1
  for (const key of Object.keys(obj2)) {answer[key] = obj2[key]}
  return answer
}

module.exports = merge;
