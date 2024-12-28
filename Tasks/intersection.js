// Refactor following solution
// Find an intersection of two dictionaries

'use strict'

const intersection = (obj1, obj2) => {
  let answer = {}
  const keys1 = Object.keys(obj1)
  for (const key of keys1) {
    if (obj1[key] === obj2[key]) answer[key] = obj1[key]
  }
  return answer
}

module.exports = intersection;
