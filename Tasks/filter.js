// Refactor following solution
// Filter array by type name

const filter = (array, type) => {
  const filtered = array.filter((element) => typeof element === type);
  return filtered;
};

module.exports = filter;
