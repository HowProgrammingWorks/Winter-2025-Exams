// Validate person name

'use strict';

const isValidate = (name) => {
  if (!name.includes(' ')) return false;
  for (const char of name) {
    const code = char.toLowerCase().charCodeAt(0);
    if ((code < 97 || code > 122) && char !== ' ') {
      return false;
    }
  }
  return true;
};

module.exports = isValidate;
