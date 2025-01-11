// Refactor following solution
// Split string into array by the first occurrence of separator
"use strict";

const sectionString = (s, t) => {
  const i = s.indexOf(t);
  if (i < 0 || t == "") {
    return [s, ""];
  } else {
    return [s.slice(0, i), s.slice(i + t.length)];
  }
};

module.exports = sectionString;
