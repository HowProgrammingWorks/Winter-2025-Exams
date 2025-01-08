// Refactor following solution
// Return an array without duplicates

const withoutDuplicates = (array) => {
  const uniqueValues = new Set();
  const result = [];
  for (const item of array) {
    if (!uniqueValues.has(item)) {
      uniqueValues.add(item);
      result.push(item);
    }
  }
  return result;
};

module.exports = withoutDuplicates;
