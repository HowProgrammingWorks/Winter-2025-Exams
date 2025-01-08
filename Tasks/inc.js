'use strict'


// Refactor following solution
// Increment all numbers in dictionary

const inc_numbers = (format_complete) => {
  for (let key in format_complete) {
    if ((typeof format_complete[key]) === 'number') {
      format_complete[key] = format_complete[key] + 1;
    }
  }
  return format_complete;
};

module.exports = inc_numbers;
