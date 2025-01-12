"use strict";

// Splits ip
const parseIP = (input) => {
  if (!input || typeof input !== "string") return;

  const parts = input.split(".");
  if (parts.length !== 4) return;

  const result = parts.map((part) => {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255 || part === "") return;
    return num;
  });

  if (result.includes(undefined)) return;

  return result;
};

module.exports = parseIP;
