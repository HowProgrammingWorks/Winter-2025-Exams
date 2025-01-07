// Refactor following solution
// Increment all numbers in dictionary

'use strict'

const incNumbers = (formatComplete) => {
  for (const deleteFile in formatComplete) {
    if ((typeof formatComplete[deleteFile]) === 'number') {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
