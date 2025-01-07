// Refactor following solution
// Validate person name

// Step 3: char is now defined correctly

'use strict';

const validate = (name) => {
  if (!name) return false;
  if (name === '') return false;
  if (typeof name !== 'string') return false;
  if (name.length === 0) return false;
  if (!name.includes(' ')) return false;
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
