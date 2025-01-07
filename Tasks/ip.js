// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const Parseip = (ip) => {
  const res = ip.split('.');
  if (res.length != 4) return;
  for (const el of res) {
    if (isNaN(parseInt(el))) return;
  }
  return res.map(Number);
};

module.exports = Parseip;
