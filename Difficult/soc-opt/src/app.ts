import { parseCSV } from "./csv";
import { CityStatistics, generateCitiesStatistics } from "./stats";

function printCityInfo(city: CityStatistics) {
  const values = [
    city.name.padEnd(18),
    city.population.toString().padStart(10),
    city.area.toString().padStart(8),
    city.density.toString().padStart(8),
    city.country.padStart(18),
    city.densityPercentage.toString().padStart(6),
  ];
  console.log(values.join("\t"));
}

function processCityData(data: string): void {
  const table = Array.from(parseCSV(data));

  const stats = generateCitiesStatistics(table);

  stats.sort((a, b) => b.densityPercentage - a.densityPercentage);

  for (const stat of stats) {
    printCityInfo(stat);
  }
}

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
