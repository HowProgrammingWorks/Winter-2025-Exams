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

if (data) {
  const lines = data.split('\n');
  const table = [];
  const paddings = [10, 8, 8, 18, 6];
  let max = 0;

  lines.splice(0, 1);

  for (const line of lines) {
    const cells = line.split(',');
    table.push(cells);
  }

  for (const row of table) {
    const density = parseInt(row[3]);
    if (density > max) max = density;
  }

  for (const row of table) {
    const ratio = Math.round((row[3] * 100) / max);
    row.push(ratio.toString());
  }

  table.sort((r1, r2) => r2[5] - r1[5]);

  for (const row of table) {
    let str = row[0].trim().padEnd(18);
    for (let i = 1; i < row.length; i++) {
      str += row[i].padStart(paddings[i - 1]);
    }
    console.log(str);
  }
}
