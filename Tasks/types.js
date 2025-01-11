// Refactor following solution
// Count types in an array

'use strict';

const types = (s) => {
  const answer = {}
  for (const i of s) {
    const t = typeof i
    if (!answer[t]) answer[t] = 0
    answer[t]++
  }
  return answer
}

module.exports = types
