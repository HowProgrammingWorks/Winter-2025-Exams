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
  const paddings = [18, 10, 8, 8, 18, 6];

  const formTable = (data) =>
    data
      .split('\n')
      .map((line) => line.split(','))
      .splice(1);

  const getMax = (table) => Math.max(...table.map((row) => row[3]));

  const sortTable = (table, max) =>
    table
      .map((row) => [...row, Math.round((row[3] * 100) / max)])
      .sort((r1, r2) => r2[5] - r1[5]);

  const formatTable = (table) =>
    table.reduce(
      (str, row) =>
        (str +=
          row
            .map((item, index) =>
              index === 0
                ? String(item).trim().padEnd(paddings[index])
                : String(item).padStart(paddings[index]),
            )
            .join('') + '\n'),
      '',
    );

  const table = formTable(data);
  const sortedTable = sortTable(table, getMax(table));
  console.log(formatTable(sortedTable));
}
