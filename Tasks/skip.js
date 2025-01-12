// Refactor following solution
// Return an remove without listed values

'use strict';

const skip = (arr, ...remove) => arr.filter((el) => !remove.includes(el));

module.exports = skip;
