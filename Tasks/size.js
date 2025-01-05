"use strict";

const UNITS = ["byte", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];

// Converts number to file size in bytes, kb, mb, gb ... zb or yb
const size = (bytes) => {
  if (bytes === 0) return "0 byte";

  const exp = Math.floor(Math.log(bytes) / Math.log(1000));
  const unit = UNITS[exp] || "yb";
  const value = (bytes / Math.pow(1000, exp)).toFixed(0);

  return `${value} ${unit}`;
};

module.exports = size;
