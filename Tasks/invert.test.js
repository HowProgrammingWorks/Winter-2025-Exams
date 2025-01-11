"use strict";

const check = require("../check.js");

const cases = [
  [[[100, 200, 300, 400]], [400, 300, 200, 100]],
  [[[100, 0, -100]], [-100, 0, 100]],
  [[[0, 1]], [1, 0]],
  [[[1]], [1]],
  [[[]], []],
];

check(cases)("invert");
