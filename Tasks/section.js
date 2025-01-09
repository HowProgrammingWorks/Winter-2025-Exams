// Refactor following solution
// Split string into array by the first occurrence of separator

// Step 4. refix naming and rewrite into functional style with ternary operator

'use strict';

const sectionOfString = (str, separator) =>
  separator && str.includes(separator)
    ? [
        str.slice(0, str.indexOf(separator)),
        str.slice(str.indexOf(separator) + separator.length),
      ]
    : [str, ''];

module.exports = sectionOfString;
