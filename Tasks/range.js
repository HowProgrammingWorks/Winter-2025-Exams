// step1
//use Array.from

'use strict';

const range = (...Range) => {
  const [from, to] = Range;
  if (to >= from) {
    return Array.from({length: to - from + 1}, (_, i) => from+i);
  } else {
    return [];
  }
};
module.exports = range;
