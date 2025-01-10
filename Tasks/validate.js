// Validate person name

'use strict';

const validateName = (name) => {
  const MIN_CODE = 97;
  const MAX_CODE = 122;
  const SPACE_CHAR = ' ';

  if (!name.includes(SPACE_CHAR)) return false;
  for (const char of name) {
    const code = char.toLowerCase().charCodeAt(0);
    if ((code < MIN_CODE || code > MAX_CODE) && char !== SPACE_CHAR) {
      return false;
    }
  }
  return true;
};

module.exports = validateName;
