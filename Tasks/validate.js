// Refactor following solution
// Validate person name

// Step 4: if statements replaced with single one, with cleanup of duplicates

'use strict';

const validate = (name) => {
  if (!name ||
    typeof name !== 'string' ||
    !name.includes(' ')) return false;

  {
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
  }
};

module.exports = validate;
