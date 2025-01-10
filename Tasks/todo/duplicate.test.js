'use strict';

const check = require('../check.js');

const cases = [
  [['abc', 5], ['abc', 'abc', 'abc', 'abc', 'abc']],
  [['abc', 1], ['abc']],
  [['abc', -1], []],
  [['abc', 0], []],
  [['', 0], []],
];

check(cases)('duplicate');
