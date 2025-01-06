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
  lines.pop();
  const table = [];
  let first = true;
  let max = 0;
  for (const line of lines) {
    if (first) {
      first = false;
    } else {
      const cells = line.split(',');
      const d = parseInt(cells[3]);
      if (d > max) max = d;
      table.push([cells[0], cells[1], cells[2], cells[3], cells[4]]);
    }
  }
  for (const row of table) {
    const a = Math.round((row[3] * 100) / max);
    row.push(a.toString());
  }
  table.sort((r1, r2) => r2[5] - r1[5]);
  for (const row of table) {
    let s = row[0].padEnd(18);
    s += row[1].padStart(10);
    s += row[2].padStart(8);
    s += row[3].padStart(8);
    s += row[4].padStart(18);
    s += row[5].padStart(6);
    console.log(s);
  }
}
