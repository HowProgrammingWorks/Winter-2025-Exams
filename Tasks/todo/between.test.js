'use strict';

const check = require('../check.js');

const cases = [
  [['Hello <username> and bye!', '<', '>'], 'username'],
  [['<username>', '<', '>'], 'username'],
  [['Hello username and bye!', '<', '>'], ''],
];

check(cases)('between');
