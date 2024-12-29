// Refactor following solution
// Generate int array from given range

// Step 4. rename input parameters, remove unusable parts of code

const range = (from, to) => {
  const result = [];
  if (to >= from) {
    for (let i = from; i <= to; i++) {
      result[i - from] = i;
    }
  }
  return result;
};

module.exports = range;
