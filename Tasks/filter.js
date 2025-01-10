// Refactor following solution
// Filter array by type name
'use strict';

const myFilter = (array, type) => array.filter((x) => typeof x === type);

module.exports = myFilter;
