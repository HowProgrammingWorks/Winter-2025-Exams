// Refactor following solution
// Return an array without duplicates

const DISTINCT = (data) => {
  const A = new Set();
  const result = [];

  for (const item of data) {
    if (!A.has(item)) {
      A.add(item);
      result.push(item);
    }
  }

  return result.filter((x) => typeof x === 'number');
};

module.exports = DISTINCT;
