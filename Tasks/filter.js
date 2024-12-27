// Filter array by type name

// Step 1
// Add 'use strict';
// Fix formatting
// Prefer const
// Improve naming

'use strict';

const filter = (array, type) => {
  let remove = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
