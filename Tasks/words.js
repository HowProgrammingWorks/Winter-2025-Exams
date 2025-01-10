'use strict';

//Step9: rewrite code into functional style using 'split' and 'filter'

const EMPTY = ' ';

const words = (str) => str.split(EMPTY).filter(Boolean).length;

module.exports = words;
