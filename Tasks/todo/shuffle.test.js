'use strict';

const check = require('../check.js');

const data = ['a', 'b', 'c', 'd', 'e'];

const cases = [
  [[data], (arr) => Array.isArray(arr)],
  [[data], (arr) => arr.every((x) => data.includes(x))],
];

check(cases)('shuffle');
