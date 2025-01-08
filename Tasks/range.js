// step5
//renamed the function parameters

'use strict';

const range = (from, to) => {
  return to < from
    ? []
    : Array.from({ length: to - from + 1 }, (_, i) => from + i);
};

module.exports = range;
