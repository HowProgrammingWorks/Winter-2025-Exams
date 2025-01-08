// Refactor following solution
// Return an array without duplicates

const noDuplicate = (value, N) => {
  if (N <= 0) return [];
  return Array(N).fill(value);
};

module.exports = noDuplicate;
