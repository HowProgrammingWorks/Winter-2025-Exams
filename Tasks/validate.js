// Refactor following solution
// Validate person name

// Step 5: reverse the if logic moving and rewriting the condition

'use strict';

const validate = (name) => {
  if (!name ||
    typeof name !== 'string' ||
    !name.includes(' ')) return false;

  for (const char of name) {
    if (char === ' ') continue;
    if (
      char.toLowerCase().charCodeAt(0) < 97 ||
      char.toLowerCase().charCodeAt(0) > 122
    ) return false;
  }
  return true;
};

module.exports = validate;
