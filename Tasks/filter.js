// Refactor following solution
// Filter array by type name

filterByType = (array, type) => {
  return array.filter((item) => typeof item === type);
};

module.exports = filterByType;
