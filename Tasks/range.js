// Refactor following solution
// Generate int array from given range

// Step 5. use declatation using keyword "new" to avoid resizing an array

const range = (from, to) => {
  if (to >= from) {
    const result = new Array(to - from);
    for (let i = from; i <= to; i++) {
      result[i - from] = i;
    }
    return result
  }
  return [];
};

module.exports = range;
