"use strict";

const check = require("../check.js");

const cases = [
  [["friday"], 6],
  [["Friday"], -1],
  [["Fri"], -1],
  [["monday"], 2],
  [["abc"], -1],
];

check(cases)("day");
