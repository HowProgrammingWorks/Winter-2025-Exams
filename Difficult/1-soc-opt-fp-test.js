'use strict';

const {
  parseRow,
  parseData,
  calculateRelativeDensity,
  sortByProperty,
  calculateColumnWidths,
  formatRow,
} = require('./1-soc-opt-fp.js');

const assert = require('node:assert');

const testParseRow = () => {
  const row = 'New York City,8537673,784,10892,United States';
  const expected = {
    city: 'New York City',
    population: 8537673,
    area: 784,
    density: 10892,
    country: 'United States',
  };
  const result = parseRow(row);
  assert.deepStrictEqual(result, expected,
    'parseRow should correctly parse a valid row');

  const invalidRow = 'Invalid,Data,Here';
  const resultInvalid = parseRow(invalidRow);
  assert.ok(isNaN(resultInvalid.population),
  'parseRow should handle invalid rows gracefully');
};

const testParseData = () => {
  const rawData = `city,population,area,density,country
Shanghai,24256800,6340,3826,China
Delhi,16787941,1484,11313,India`;

  const expected = {
    headers: ['city', 'population', 'area', 'density', 'country'],
    rows: [
      {
        city: 'Shanghai',
        population: 24256800,
        area: 6340,
        density: 3826,
        country: 'China',
      },
      {
        city: 'Delhi',
        population: 16787941,
        area: 1484,
        density: 11313,
        country: 'India',
      },
    ],
  };

  const result = parseData(rawData);
  assert.deepStrictEqual(result, expected,
    'parseData should correctly parse valid raw data');
};

const testCalculateRelativeDensity = () => {
  const rows = [
    { density: 2470 },
    { density: 6300 },
    { density: 10000 },
  ];
  const expected = [
    { density: 2470, relativeDensity: 25 },
    { density: 6300, relativeDensity: 63 },
    { density: 10000, relativeDensity: 100 },
  ];
  const result = calculateRelativeDensity(rows);
  assert.deepStrictEqual(result, expected,
    'calculateRelativeDensity should correctly calculate relative densities');
};

const testSortByRelativeDensity = () => {
  const rows = [
    { density: 3826, relativeDensity: 28 },
    { density: 11313, relativeDensity: 100 },
    { density: 13712, relativeDensity: 120 },
  ];
  const expected = [
    { density: 13712, relativeDensity: 120 },
    { density: 11313, relativeDensity: 100 },
    { density: 3826, relativeDensity: 28 },
  ];
  const result = sortByProperty(rows, 'relativeDensity');
  assert.deepStrictEqual(result, expected,
    'sortByRelativeDensity should sort rows by descending relative density');
};

const testCalculateColumnWidths = () => {
  const rows = [
    {
      city: 'Shanghai',
      population: 24256800,
      area: 6340,
      density: 3826,
      country: 'China',
    },
    {
      city: 'Delhi',
      population: 16787941,
      area: 1484,
      density: 11313,
      country: 'India',
    },
  ];
  const keys = ['city', 'population', 'area', 'density', 'country'];
  const expected = [8, 10, 4, 7, 7];
  const result = calculateColumnWidths(rows, keys);
  assert.deepStrictEqual(result, expected,
  'calculateColumnWidths should correctly calculate the maximum column widths');
};

const testFormatRow = () => {
  const row = {
    city: 'Delhi',
    population: 16787941,
    area: 1484,
    density: 11313,
    country: 'India',
    relativeDensity: 100,
  };
  const keys = ['city',
    'population',
    'area',
    'density',
    'country',
    'relativeDensity'];
  const columnWidths = [8, 8, 4, 5, 7, 15];
  const expected =
  'Delhi    | 16787941 | 1484 | 11313 | India   |             100';
  const result = formatRow(row, keys, columnWidths);
  assert.strictEqual(result, expected, 'formatRow should correctly show a row');
};

const runTests = () => {
  console.log('Running Unit Tests...\n');
  testParseRow();
  testParseData();
  testCalculateRelativeDensity();
  testSortByRelativeDensity();
  testCalculateColumnWidths();
  testFormatRow();
  console.log('\nAll tests passed.');
};

runTests();
