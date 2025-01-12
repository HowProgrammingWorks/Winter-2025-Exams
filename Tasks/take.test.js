"use strict";

const check = require("../check.js");

const cases = [
  [[{ a: "uno", b: "due", c: "tre" }, "b", "c"], { b: "due", c: "tre" }],
  [[{ a: 1, b: 2, c: 3 }, "b", "c"], { b: 2, c: 3 }],
  [[{ a: "uno", b: "due", c: "tre" }, "x"], {}],
  [[{ a: "uno", b: "due", c: "tre" }], {}],
];

check(cases)("take");
