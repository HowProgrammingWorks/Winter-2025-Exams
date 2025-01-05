"use strict";

const check = require("../check.js");

const cases = [
  [["Hello Marcus Aureluis"], 3],
  [["Hello"], 1],
  [[""], 0],
];

check(cases)("words");
