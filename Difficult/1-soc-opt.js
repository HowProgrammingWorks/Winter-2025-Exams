'use strict';

// Tasks for rewriting:
//   - Apply optimizations of computing resources: processor, memory
//   - Minimize cognitive complexity
//   - Respect SRP and SoC
//   - Improve readability (understanding), reliability
//   - Optimize for maintainability, reusability, flexibility
//   - Make code testable
//   - Implement simple unittests without frameworks
//   - Try to implement in multiple paradigms: OOP, FP, procedural, mixed

const parseData = (data) => {
  const rows = data.split('\n').slice(1);
  return rows.map((row) => row.split(','));
};

const findMaxDensity = (table, columnIndex) =>
  Math.max(...table.map((row) => parseInt(row[columnIndex])));

const calculatePropotion = (value, maxValue, scale = 100) =>
  Math.round((value * scale) / maxValue);

const calculateDensityPercentage = (table, maxDensity, columnIndex) =>
  table.map((row) => {
    const density = parseInt(row[columnIndex]);
    const densityPercentage = calculatePropotion(density, maxDensity);
    return [...row, densityPercentage.toString()];
  });

const sortTableByDensityPercentage = (table, columnIndex) =>
  table.toSorted(
    (currentRow, nextRow) => nextRow[columnIndex] - currentRow[columnIndex],
  );

const displayTable = (table) => {
  const columnWidths = [18, 10, 8, 8, 18, 6];

  const formatRow = (row) =>
    row
      .map((cell, index) => {
        const width = columnWidths[index];
        return index === 0 ? cell.padEnd(width) : cell.padStart(width);
      })
      .join('');

  for (const row of table) {
    console.log(formatRow(row));
  }
};

const processCityData = (data) => {
  const table = parseData(data);
  const columnDensityIndex = 3;
  const maxDensity = findMaxDensity(table, columnDensityIndex);
  const tableWithDensity = calculateDensityPercentage(
    table,
    maxDensity,
    columnDensityIndex,
  );
  const sortedTable = sortTableByDensityPercentage(
    tableWithDensity,
    columnDensityIndex,
  );
  displayTable(sortedTable);
};

const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

processCityData(data);

const testParseData = () => {
  const sampleData = `city,population,area,density,country
CityA,1000,100,10,CountryA
CityB,2000,200,20,CountryB`;
  const parsed = parseData(sampleData);
  console.assert(parsed.length === 2, 'Test Failed: Parsing Rows');
  console.assert(parsed[0][0] === 'CityA', 'Test Failed: Parsing Row Data');
};

const testFindMaxDensity = () => {
  const sampleTable = [
    ['CityA', '1000', '100', '10', 'CountryA'],
    ['CityB', '2000', '200', '20', 'CountryB'],
  ];
  const columnDensityIndex = 3;
  const max = findMaxDensity(sampleTable, columnDensityIndex);
  console.assert(max === 20, 'Test Failed: Finding Max Density');
};

const testCalculateDensityPercentage = () => {
  const sampleTable = [
    ['CityA', '1000', '100', '10', 'CountryA'],
    ['CityB', '2000', '200', '20', 'CountryB'],
  ];
  const maxDensity = 20;
  const columnDensityIndex = 3;
  const result = calculateDensityPercentage(
    sampleTable,
    maxDensity,
    columnDensityIndex,
  );
  console.assert(
    result[0][5] === '50',
    'Test Failed: Density Percentage CityA',
  );
  console.assert(
    result[1][5] === '100',
    'Test Failed: Density Percentage CityB',
  );
};

const testSortTableByDensityPercentage = () => {
  const sampleTable = [
    ['CityA', '1000', '100', '10', 'CountryA', '50'],
    ['CityB', '2000', '200', '20', 'CountryB', '100'],
  ];
  const columnDensityIndex = 3;
  const result = sortTableByDensityPercentage(sampleTable, columnDensityIndex);
  console.assert(result[0][0] === 'CityB', 'Test Failed: Sorting Order');
  console.assert(result[1][0] === 'CityA', 'Test Failed: Sorting Order');
};

const testDisplayTable = () => {
  const sampleTable = [
    ['CityA', '1000', '100', '10', 'CountryA', '50'],
    ['CityB', '2000', '200', '20', 'CountryB', '100'],
  ];
  const originalConsoleLog = console.log;
  let logOutput = [];
  console.log = (output) => logOutput.push(output);

  displayTable(sampleTable);

  console.assert(
    logOutput.length === 2,
    'Test Failed: Table Display Output Count',
  );
  console.assert(
    logOutput[0].includes('CityA'),
    'Test Failed: Table Display CityA',
  );
  console.assert(
    logOutput[1].includes('CityB'),
    'Test Failed: Table Display CityB',
  );

  console.log = originalConsoleLog;
};

testParseData();
testFindMaxDensity();
testCalculateDensityPercentage();
testSortTableByDensityPercentage();
testDisplayTable();
