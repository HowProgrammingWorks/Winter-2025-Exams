// Refactor following solution
// Validate person name
"use strict";

const isValidate = (name) => {
  if (!name) return false;
  if (typeof name !== 'string') return false;
  if (!name.includes(' ')) return false;
  let temp = name.toLocaleLowerCase();
  for (let char of temp) {
    if (char === ' ') continue;
    if (
      char.charCodeAt(0) < 97 ||
      char.charCodeAt(0) > 122
    ) return false;
  }
  return true;
};

module.exports = isValidate;