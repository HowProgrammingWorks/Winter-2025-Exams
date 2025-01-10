'use strict';

// Task completed:
//   - Applied optimizations of computing resources: processor, memory
//   - Minimized cognitive complexity
//   - Functional approach chosen
//   - Improved readability (understanding), reliability
//   - Optimized for maintainability, reusability, flexibility
//   - Made code testable
//   - Implemented simple unittests without frameworks

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

const COMMA = ',';
const LINE_BREAK = '\n';
const COLUMN_SEPARATOR = ' | ';
const ROW_SEPARATOR = '-';

const parseRow = (row) => {
  const [city, population, area, density, country] = row.split(COMMA);
  return {
    city,
    population: parseInt(population),
    area: parseInt(area),
    density: parseInt(density),
    country,
  };
};

const parseData = (rawData) => {
  const [headerRow, ...dataRows] = rawData.split(LINE_BREAK);
  const headers = headerRow.split(COMMA);
  const rows = dataRows.map(parseRow);
  return { headers, rows };
};

const calculateRelativeDensity = (rows) => {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  const maxDensity = Math.max(...rows.map((row) => row.density));
  const PERCENTAGE_SCALE = 100;
  return rows.map((row) => ({
    ...row,
    relativeDensity: Math.round((row.density * PERCENTAGE_SCALE) / maxDensity),
  }));
};

const sortByProperty = (rows, property) =>
  [...rows].toSorted((current, next) =>
    next[property] - current[property]);

const calculateColumnWidths = (rows, keys) =>
  keys.map((key) => {
    const keyLength = key.length;
    const valueLengths = rows.map((row) => row[key]?.toString().length || 0);
    return Math.max(keyLength, ...valueLengths);
  });

const formatRow = (row, keys, columnWidths) =>
  keys
    .map((key, index) => {
      const value = row[key]?.toString() || '';
      const width = columnWidths[index];
      return isNaN(row[key]) ? value.padEnd(width) : value.padStart(width);
    })
    .join(COLUMN_SEPARATOR);

const displayHeaders = (keys, columnWidths) => {
  const headerLine = keys
  .map((key, index) => key.padEnd(columnWidths[index]))
  .join(COLUMN_SEPARATOR);
  console.log(headerLine);
  console.log(ROW_SEPARATOR.repeat(headerLine.length));
};

const displayRows = (rows, keys, columnWidths) => {
  for (const row of rows) {
    const formattedRow = formatRow(row, keys, columnWidths);
    console.log(formattedRow);
  }
};

const displayTable = (data) => {
  const { headers, rows } = data;
  if (!rows.length) {
    console.log('No data available to display.');
    return;
  }

  const keys = [...headers, 'relativeDensity'];
  const columnWidths = calculateColumnWidths(rows, keys);
  displayHeaders(keys, columnWidths);
  displayRows(rows, keys, columnWidths);
};

const parsedData = parseData(data);
let { rows } = parsedData;
rows = calculateRelativeDensity(rows);
rows = sortByProperty(rows, 'relativeDensity');
displayTable({ headers: parsedData.headers, rows });

module.exports = {
    parseRow,
    parseData,
    calculateRelativeDensity,
    sortByProperty,
    calculateColumnWidths,
    formatRow,
    displayHeaders,
    displayRows,
    displayTable,
  };
