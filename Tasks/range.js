// step3
//add Conditional operator

'use strict';

const range = (...Range) => {
  const [from, to] = Range;
  return to < from
      ? []
      : Array.from({length: to - from + 1}, (_, i) => from+i);
};

module.exports = range;
