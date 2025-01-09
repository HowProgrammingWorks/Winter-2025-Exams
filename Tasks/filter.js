`use strict`;

// Refactor following solution
// Filter array by type name

//Fifth step: replace for..of loop with filter function

const filterByName = (array, type) => array.filter((e) => typeof e === type);

module.exports = filterByName;
