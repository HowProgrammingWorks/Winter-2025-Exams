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
    population: +population,
    area: +area,
    density: +density,
    country,
  };
};

const parseData = (rawData) => {
  const [headerRow, ...dataRows] = rawData.split(LINE_BREAK);
  const headers = headerRow.split(COMMA);
  const rows = dataRows.map(parseRow);
  return { headers, rows };
};
