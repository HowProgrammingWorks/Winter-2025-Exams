"use strict";

const check = require("../check.js");

const cases = [
  [
    [
      { a: "uno", b: "due" },
      { a: "uno", c: "tre" },
    ],
    { b: "due" },
  ],
  [
    [
      { a: "uno", b: "due" },
      { a: "uno", b: "due" },
    ],
    {},
  ],
  [
    [
      { a: "uno", b: "due" },
      { a: "uno", b: "due", c: "tre" },
    ],
    //FIXME: are the tests broken? It should return { c: "tre" }, doesn't it?
    {},
  ],
  [
    [
      { a: "uno", b: "due" },
      { a: "uno1", b: "due" },
    ],
    {},
  ],
  [
    [
      { a: "uno1", b: "due" },
      { a: "uno", b: "due" },
    ],
    {},
  ],
];

check(cases)("difference");
