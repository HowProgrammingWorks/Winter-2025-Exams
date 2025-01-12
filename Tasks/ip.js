// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const ipLength = 4;
  const res = ip.split('.').filter((el) => el !== '');
  return res.length === ipLength ? res.map(Number) : undefined;
};

module.exports = parseIp;
