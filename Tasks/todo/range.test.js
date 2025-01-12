'use strict';

const check = require('../check.js');

const cases = [
  [[10, 15], [10, 11, 12, 13, 14, 15]],
  [[-2, 2], [-2, -1, 0, 1, 2]],
  [[2, -2], []],
  [[2, 2], [2]],
  [[0, 0], [0]],
];

check(cases)('range');
