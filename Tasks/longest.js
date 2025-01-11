// Refactor following solution
// Find longest string

'use strict';

const longest = (arr) => {
  let answer = ""
  for (const value of arr) {
    if (typeof value !== 'string') {throw "All values in array must be string"}
    if (value.length > answer.length) {answer = value}
  }
  return answer
}

module.exports = longest;
