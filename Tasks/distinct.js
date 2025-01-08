// Refactor following solution
// Return an array without duplicates

DISTINCT = (data) => {
  const seen = new Set();
  const result = [];

  for (const num of data) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;
};

module.exports = DISTINCT;
