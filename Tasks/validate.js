// Refactor following solution
// Validate person name
"use strict";

const isValidate = (name) => {
  if (!name) return false;
  if (typeof name !== "string") return false;
  if (!name.includes(" ")) return false;
  let temp = name.toLocaleLowerCase();
  const aCharCode = 97;
  const zCharCode = 122;
  for (let char of temp) {
    if (char === " ") continue;
    if (char.charCodeAt(0) < aCharCode || char.charCodeAt(0) > zCharCode)
      return false;
  }
  return true;
};

module.exports = isValidate;
