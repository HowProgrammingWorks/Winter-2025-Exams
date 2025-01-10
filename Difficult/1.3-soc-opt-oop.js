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

class Table {
  constructor(data, paddings) {
    this.rawData = data;
    this.paddings = paddings;
    this.table = [];
    this.sortedTable = [];
  }

  formTable() {
    const lines = this.rawData.split('\n').splice(1);
    this.table = lines.map((line) => line.split(','));
  }

  getMax(index) {
    return Math.max(...this.table.map((row) => row[index]));
  }

  addRatio(index) {
    const max = this.getMax(index);
    this.table = this.table.map((row) => [
      ...row,
      Math.round((row[index] * 100) / max),
    ]);
  }

  sortTable(index) {
    this.sortedTable = this.table.sort((r1, r2) => r2[index] - r1[index]);
  }

  formatRow(row) {
    return row
      .map((item, index) =>
        index === 0
          ? String(item).trim().padEnd(this.paddings[index])
          : String(item).padStart(this.paddings[index]),
      )
      .join('');
  }

  logTable() {
    for (const row of this.sortedTable) {
      console.log(this.formatRow(row));
    }
  }

  processTable() {
    this.formTable();
    this.addRatio(3);
    this.sortTable(5);
    this.logTable();
  }
}

if (data) {
  const paddings = [18, 10, 8, 8, 18, 6];
  const table = new Table(data, paddings);
  table.processTable();
}
