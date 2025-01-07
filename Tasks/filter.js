// Refactor following solution
// Filter array by type name
'use strict';

const Filter = (array, type) => {
    const newArray = array;

    return newArray.filter((x) => typeof x === type);
};
module.exports = Filter;
