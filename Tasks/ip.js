// Refactor following solution
// Split string by the first occurrence of separator
"use strict";

const parseIP = (ip) => {
  if (!ip) return undefined;
  const result = ip.split(".").map((element) => parseInt(element, 10));

  for (let i = 0; i < result.length; i++) {
    if (isNaN(result[i])) return undefined;
  }

  const normalIPLength = 4;
  if (result.length === normalIPLength) return result;
};

module.exports = parseIP;
