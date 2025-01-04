// Validate person name

'use strict';

const isValidate = (name) => {
  if (!name.includes(' ')) return false;
  for (const char of name) {
    if (char === ' ') continue;
    if (
      char.toLowerCase().charCodeAt(0) >= 97 &&
      char.toLowerCase().charCodeAt(0) <= 122
    ) {
    } else {
      return false;
    }
  }
  return true;
};

module.exports = isValidate;
