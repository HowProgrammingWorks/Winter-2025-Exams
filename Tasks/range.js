// step1
//add const
//improve naming

'use strict';

const range = (...Range) => {
  const [from, to] = Range;
  if (to >= from) {
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      Range[i - from] = i;
    }
  } else {
    return [];
  }
  return Range;
};
module.exports = range;
