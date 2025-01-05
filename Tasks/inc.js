// Step 3
// Remove the unused parameter

'use strict';

const inc_numbers = (format_complete) => {
  const copiedDict = { ...format_complete };
  for (const delete_file in copiedDict) {
    if ((typeof copiedDict[delete_file]).charAt(0).toUpperCase() === 'N') {
      copiedDict[delete_file] = copiedDict[delete_file] + 1;
    }
  }
  return copiedDict;
};

module.exports = inc_numbers;
