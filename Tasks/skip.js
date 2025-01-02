// Refactor following solution
// Return an remove without listed values

// Step 3. improve naming

"use strict";

const skip = (array, ...remove) => {
  let counter = 0;
  for (const element of array) {
    for (const value of remove) {
      if (element === value) {
        array.splice(counter, 1);
      }
    }
    counter++;
  }
  return array;
};

module.exports = skip;
