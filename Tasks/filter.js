// Refactor following solution
// Filter array by type name
'use strict';

const Filter = (array, type) => array.filter((x) => typeof x === type);

module.exports = Filter;
