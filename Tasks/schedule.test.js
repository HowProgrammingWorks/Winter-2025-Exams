"use strict";

const check = require("../check.js");

let i = 0;
let ns = [];

const cases = [
  [
    [
      (n) => {
        ns.push(n);
        i++;
      },
      3,
      10,
    ],
    () => {
      if (i !== 3) return false;
      return ns.join("") === "012";
    },
  ],
  [
    [
      (n) => {
        ns.push(n);
        i++;
      },
      0,
      10,
    ],
    () => {
      if (i !== 3) return false;
      return ns.join("") === "012";
    },
  ],
  [
    [
      (n) => {
        ns.push(n);
        i++;
      },
      2,
      0,
    ],
    () => {
      if (i !== 5) return false;
      return ns.join("") === "01201";
    },
  ],
];

check(cases)("schedule");
