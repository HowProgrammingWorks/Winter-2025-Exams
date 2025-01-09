// Refactor following solution
// Count types in an array

// Step 4
// Add condition

// const countTypes = (arr) => {
//   const typesCounts = {
//     number: 0,
//     string: 0,
//     boolean: 0,
//   };
//   for (const item of arr) {
//     const itemType = typeof item;
//     if (typesCounts.hasOwnProperty(itemType)) {
//       typesCounts[itemType]++;
//     }
//   }
//   return typesCounts;
// };


'use strict'; //I change function like you write but it doesn`t pass tests because of another logic in your tests

const countTypes = (arr) => {
    const typesCounts = {};
    for (const item of arr) {
        const itemType = typeof item;
        if (typesCounts.hasOwnProperty(itemType)) {
            typesCounts[itemType]++;
        } else {
            typesCounts[itemType] = 1;
        }
    }
    return typesCounts;
};

module.exports = countTypes;