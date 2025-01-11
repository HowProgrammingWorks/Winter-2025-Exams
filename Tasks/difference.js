// Refactor following solution
// Find a difference between two dictionaries

'use strict';

const diff = (obj1, obj2) => {
  let answer = {}
  for (const key in obj1) {
    if (!obj2[key]) {answer[key] = obj1[key]}
  }
  return answer
}

module.exports = diff;
