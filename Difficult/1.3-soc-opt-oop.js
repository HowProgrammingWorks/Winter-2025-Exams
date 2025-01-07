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
  constructor(data) {
    this.rawData = data;
    this.paddings = [18, 10, 8, 8, 18, 6];
    this.table = [];
    this.sortedTable = [];
  }

  formTable() {
    const lines = this.rawData.split('\n');
    lines.splice(0, 1);
    this.table = lines.map((line) => line.split(','));
  }

  getMax() {
    return Math.max(...this.table.map((row) => row[3]));
  }

  sortTable() {
    const max = this.getMax();
    this.sortedTable = this.table.map((row) => [
      ...row,
      Math.round((row[3] * 100) / max),
    ]);
    this.sortedTable.sort((r1, r2) => r2[5] - r1[5]);
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
    this.sortTable();
    this.logTable();
  }
}

if (data) {
  const table = new Table(data);
  table.processTable();
}
