// Refactor following solution
// Filter array by type name

'use strict';

const filter = (array, type) => array.filter(item => typeof item === type);

module.exports = filter;
