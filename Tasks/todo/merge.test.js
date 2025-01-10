'use strict';

const check = require('../check.js');

const cases = [
  [[{ a: 'uno', b: 'due' }, { c: 'tre' }], { a: 'uno', b: 'due', c: 'tre' }],
  [[{ a: 'uno', b: 'due' }, { a: 'uno' }], { a: 'uno', b: 'due' }],
  [[{ a: 'uno', b: 'due' }, { a: 'due' }], { a: 'due', b: 'due' }],
  [[{ a: 'uno' }, { c: 'tre' }], { a: 'uno', c: 'tre' }],
  [[{ a: 'uno' }, {}], { a: 'uno' }],
  [[{}, {}], {}],
];

check(cases)('merge');
