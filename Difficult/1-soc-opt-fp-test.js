// test.js
'use strict';

const {
  parseRow,
  parseData,
  calculateRelativeDensity,
  sortByRelativeDensity,
  calculateColumnWidths,
  formatRow,
} = require('./1-soc-opt-fp.js');

const assert = (description, condition) => {
  if (condition) {
    console.log(`✅ ${description}`);
  } else {
    console.error(`❌ ${description}`);
  }
};
