// Refactor following solution
// Filter array by type name

//Fifth step: replace for..of loop with filter function 

const filter = (array, type) => {
  return array.filter(e => typeof e === type);
};

module.exports = filter;
