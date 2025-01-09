// Refactor following solution
// Split string into array by the first occurrence of separator

// Step 5. made code human-readable in general using intermediate identifiers

'use strict';

const sectionOfString = (str, separator) => {
  if (separator && str.includes(separator)) {
    const separatorIndex = str.indexOf(separator);
    const firstPart = str.slice(0, separatorIndex); 
    const secondPart = str.slice(separatorIndex + separator.length);
    return [firstPart, secondPart];
  }
  return [str, ''];
}
  

module.exports = sectionOfString;
