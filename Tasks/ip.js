// Refactor following solution
// Split string by the first occurrence of separator

'use strict'

const Parseip = (ip) => {
  const res = [];
  if (ip === '') return;
  else {
    const array = ip.split('.');
    if (array.length != 4) return;
    let j = 0;
    for (const el of array) {
      res[j] = parseInt(el);
      if (isNaN(res[j])) return;
      j++;
    }
  }
  return res;
};

module.exports = Parseip;
