// Refactor following solution
// Sum all numbers from an array

function sum(s = []) {
  return s.filter(i => typeof i === 'number').reduce((sum, num) => sum + num, 0);
}

module.exports = sum;
