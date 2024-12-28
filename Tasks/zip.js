// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict'

const zip = (a = [], b = []) => {
  let answer = []
  const top = (a.length < b.length) ? a.length : b.length
  for (let i = 0; i < top; i++) {
    const cell = [a[i], b[i]];
    answer[i] = cell
  }
  return answer;
};

module.exports = zip;
