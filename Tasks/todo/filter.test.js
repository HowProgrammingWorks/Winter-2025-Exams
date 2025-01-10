'use strict';

const check = require('../check.js');

const cases = [
  [[[1, 2, 'three', 4, 5, 'six'], 'number'], [1, 2, 4, 5]],
  [[[-1, 0, 1, 2], 'number'], [-1, 0, 1, 2]],
  [[[-1, 0, 1, 2], 'string'], []],
  [[[true, true, false, 1, 'six'], 'boolean'], [true, true, false]],
  [[[], 'string'], []],
];

check(cases)('filter');
