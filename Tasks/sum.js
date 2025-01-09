// Refactor following solution
// Sum all numbers from an array

const sumNumbers = (array) => {
  let sum = 0;
  for (const item of array) {
    if (typeof item === "number") {
      sum += item;
    }
  }
  return sum;
}

module.exports = sumNumbers;
