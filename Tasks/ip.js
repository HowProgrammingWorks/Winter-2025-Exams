// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const res = ip.split('.').filter((el) => el !== '');
  return res.length === 4 ? res.map(Number) : undefined;
};

module.exports = parseIp;
