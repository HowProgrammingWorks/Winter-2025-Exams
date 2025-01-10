'use strict';

const check = require('../check.js');

const cases = [
  [[{ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd'], { a: 1, d: 4 }],
  [[{ a: 1, b: 'two', c: 3, d: 4 }, 'a'], { a: 1 }],
  [[{ a: 1, b: 'two', c: 3, d: 4 }, 'd'], { d: 4 }],
  [[{ a: 1, b: 'two', c: 3, d: 4 }], {}],
  [[{ a: 1 }, 'x'], {}],
  [[{ a: 1 }, ''], {}],
  [[{}, ''], {}],
];

check(cases)('only');
