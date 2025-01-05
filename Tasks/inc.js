// Step 2
// Avoid mutation of the original object by creating a copy

'use strict';

const inc_numbers = (format_complete, ...rest_variables) => {
  const copiedDict = { ...format_complete };
  for (const delete_file in copiedDict) {
    if ((typeof copiedDict[delete_file]).charAt(0).toUpperCase() === 'N') {
      copiedDict[delete_file] = copiedDict[delete_file] + 1;
    }
  }
  return copiedDict;
};

module.exports = inc_numbers;
