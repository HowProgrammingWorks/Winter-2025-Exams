// Refactor following solution
// Get one random element from an array

'use strict'

const sample = (arr) => {
  const answer = arr[Math.floor(Math.random() * arr.length)];
  return answer;
};

module.exports = sample;
