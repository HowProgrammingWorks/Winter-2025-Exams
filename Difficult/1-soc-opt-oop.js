'use strict';

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

class Table {
  constructor(data) {
    const { headers, rows } = this.parseData(data);
    this.headers = headers;
    this.rows = rows;
  }

  parseData(rawData) {
    const [headerRow, ...dataRows] = rawData.split(LINE_BREAK);
    const headers = headerRow.split(COMMA);
    const rows = dataRows.map((row) => this.parseRow(row));
    return { headers, rows };
  }

  parseRow(row) {
    const [city, population, area, density, country] = row.split(COMMA);
    return {
      city,
      population: parseInt(population),
      area: +parseInt(area),
      density: parseInt(density),
      country,
    };
  }

  calculateRelativeDensity() {
    if (!Array.isArray(this.rows) || this.rows.length === 0) return;

    const maxDensity = Math.max(...this.rows.map((row) => row.density));
    const PERCENTAGE_SCALE = 100;

    this.rows = this.rows.map((row) => ({
      ...row,
      relativeDensity:
        Math.round((row.density * PERCENTAGE_SCALE) / maxDensity),
    }));
  }

  sortByProperty(property) {
    this.rows = this.rows.toSorted((current, next) =>
       next[property] - current[property]);
  }

  calculateColumnWidths(keys) {
    return keys.map((key) => {
      const keyLength = key.length;
      const valueLengths = this.rows.map((row) =>
        row[key]?.toString().length || 0);
      return Math.max(keyLength, ...valueLengths);
    });
  }

  formatRow(row, keys, columnWidths) {
    return keys
      .map((key, index) => {
        const value = row[key]?.toString() || '';
        const width = columnWidths[index];
        return isNaN(row[key]) ? value.padEnd(width) : value.padStart(width);
      })
      .join(COLUMN_SEPARATOR);
  }

  displayHeaders(keys, columnWidths) {
    const headerLine = keys
      .map((key, index) => key.padEnd(columnWidths[index]))
      .join(COLUMN_SEPARATOR);
    console.log(headerLine);
    console.log(ROW_SEPARATOR.repeat(headerLine.length));
  }

  displayRows(keys, columnWidths) {
    for (const row of this.rows) {
      const formattedRow = this.formatRow(row, keys, columnWidths);
      console.log(formattedRow);
    }
  }

  displayTable() {
    if (!this.rows.length) {
      console.log('No data available to display.');
      return;
    }

    const keys = [...this.headers, 'relativeDensity'];
    const columnWidths = this.calculateColumnWidths(keys);
    this.displayHeaders(keys, columnWidths);
    this.displayRows(keys, columnWidths);
  }
}

const table = new Table(data);
table.calculateRelativeDensity();
table.sortByProperty('relativeDensity');
table.displayTable();

module.exports = {
  Table,
};
