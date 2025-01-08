// Refactor following solution
// Return an array without duplicates

const duplicate = (value, N) => {
  if (N <= 0) return [];

  return Array(N).fill(value);
};

module.exports = duplicate;


