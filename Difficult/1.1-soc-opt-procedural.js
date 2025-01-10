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

const formTable = (data) => {
  const lines = data.split('\n').splice(1);
  const table = [];
  for (const line of lines) {
    const cells = line.split(',');
    table.push(cells);
  }
  return table;
};

const getMax = (table, rowIndex) => {
  let max = 0;
  for (const row of table) {
    const density = parseInt(row[rowIndex]);
    if (density > max) max = density;
  }
  return max;
};

const addRatio = (table, max, rowIndex) => {
  const tableWithRatio = [...table];
  for (const row of tableWithRatio) {
    const ratio = Math.round((row[rowIndex] * 100) / max);
    row.push(ratio.toString());
  }
  return tableWithRatio;
};

const sortTable = (table, index) =>
  table.sort((r1, r2) => r2[index] - r1[index]);

const logTable = (table, paddings) => {
  for (const row of table) {
    let str = '';
    for (let i = 0; i < row.length; i++) {
      str += i === 0 ? row[0].trim().padEnd(18) : row[i].padStart(paddings[i]);
    }
    console.log(str);
  }
};

if (data) {
  const paddings = [18, 10, 8, 8, 18, 6];
  const table = formTable(data);
  const max = getMax(table, 3);
  const tableWithRatio = addRatio(table, max, 3);
  const sortedTable = sortTable(tableWithRatio, 5);
  logTable(sortedTable, paddings);
}
