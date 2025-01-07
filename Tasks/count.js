// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => Object.values(obj).reduce((acc, current) => typeof current === "number" ? acc + current: acc, 0)

module.exports = count;