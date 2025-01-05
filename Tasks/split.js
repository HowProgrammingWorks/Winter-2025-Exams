// Step 1
// Add 'use strict' and `const`

'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = split_Array;
