// Refactor following solution
// Split string into array by the first occurrence of separator

// Step 3. fix naming

"use strict";

const sectionOfString = (str, separator) => {
  const index = str.indexOf(separator);
  if (index < 0 || separator == "") {
    return [str, ""];
  } else {
    return [str.slice(0, index), str.slice(index + separator.length)];
  }
};

module.exports = sectionOfString;
