// Refactor following solution
// Sum all number values in dict
'use strict';

const count = (obj) => Object.values(obj).reduce((sum, val) => sum + (typeof val === 'number' ? val : 0), 0);

module.exports = count;
