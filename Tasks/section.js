// Refactor following solution
// Split string into array by the first occurrence of separator

// Step 1. add "use strict"

"use strict";

SectionString = (s, t) => {
  i = s.indexOf(t);
  if (i < 0 || t == "") {
    return [s, ""];
  } else {
    return [s.slice(0, i), s.slice(i + t.length)];
  }
};

module.exports = SectionString;
