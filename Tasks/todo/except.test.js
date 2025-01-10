'use strict';

const check = require('../check.js');

const cases = [
  [[{ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd'], { b: 'two', c: 3 }],
  [[{ a: 1, b: 'two', c: 3, d: 4 }, 'a'], { b: 'two', c: 3, d: 4 }],
  [[{ a: 1, b: 'two', c: 3, d: 4 }], { a:1, b: 'two', c: 3, d: 4 }],
  [[{ a: 1, b: 'two' }, 'c', 'd', 'e'], { a:1, b: 'two' }],
  [[{}, 'a'], {}],
];

check(cases)('except');
