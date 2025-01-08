// Refactor following solution
// Filter array by type name

const filterByType = (array, type) => {
  return array.filter(item => typeof item === type);
};

module.exports = filterByType;
