// Refactor following solution
// Get one random element from an array

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = SAMPLE;
