// Refactor following solution
// Return an array without duplicates

const duplicate = (value, duplicateNumber) => {
  if (duplicateNumber <= 0) return [];
  return Array(duplicateNumber).fill(value);
};

module.exports = duplicate;
