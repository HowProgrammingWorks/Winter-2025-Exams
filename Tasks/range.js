// Refactor following solution
// Generate int array from given range

// Step 3. fix naming

const numbersRange = (...range) => {
  const [from, to] = range;
  if (to >= from) {
    range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = numbersRange;
