'use strict';

const check = require('../check.js');

const CHARS = 'abc123';

const cases = [
  [[CHARS, 7], (s) => s.length === 7],
  [[CHARS, 7], (s) => {
    for (const char of s) {
      if (!CHARS.includes(char)) return false;
    }
    return true;
  }],
];

check(cases)('password');
