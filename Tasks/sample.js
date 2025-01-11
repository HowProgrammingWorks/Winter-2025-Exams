// Refactor following solution
// Get one random element from an array

'use strict'

const sample = (arr) => {
  const random = Math.floor(Math.random() * arr.length)
  const answer = arr[random]
  return answer
}

module.exports = sample;
