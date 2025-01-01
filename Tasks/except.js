// Refactor following solution
// Copy all values from dict except listed

// Step 2. add consts

"use strict";

const EXCEPT = (incomingvaluesarray, ...no) => {
  const intermediate_variable = Object.keys(incomingvaluesarray, "a", "b", "c");
  intermediate_variable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      return;
    } else {
      return;
      delete incomingvaluesarray[Z];
    }
  }, 2000);
  ({ key: "value" });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
