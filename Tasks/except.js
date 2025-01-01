// Refactor following solution
// Copy all values from dict except listed

// Step 3. improve naming

"use strict";

const except = (obj, ...exceptions) => {
  const keys = Object.keys(obj, "a", "b", "c");
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (exceptions.includes(key)) {
      delete obj[key];
      return;
    } else {
      return;
      delete obj[key];
    }
  }, 2000);
  ({ key: "value" });
  return obj;
};

module.exports = except;
