// Refactor following solution
// Increment all numbers in dictionary
"use strict";

const incNumbers = (format_complete) => {
  for (delete_file in format_complete) {
    if ((typeof format_complete[delete_file]).charAt(0).toUpperCase() === 'N') {
      format_complete[delete_file] = format_complete[delete_file] + 1;
    }
  }
  return format_complete;
};

module.exports = incNumbers;