import { City } from "./city";

export function* parseCSV(csvData: string): Generator<City> {
  const lines = csvData.split("\n");

  const expectedHeaders = ["city", "population", "area", "density", "country"];
  const headers = lines.shift()?.split(",") || [];

  if (
    headers.length !== expectedHeaders.length ||
    !headers.every((header, index) => header === expectedHeaders[index])
  ) {
    throw new Error(
      "csv headers do not match the expected format: " +
        expectedHeaders.join(", "),
    );
  }

  for (const line of lines) {
    if (!line.trim()) continue;

    const cells = line.split(",").map((cell) => cell.trim());

    if (cells.length !== expectedHeaders.length) {
      throw new Error(`header line '${line}': invalid format`);
    }

    const [cityName, population, area, density, country] = cells;

    if (!cityName) {
      console.error(`line '${line}': missing city name`);
      continue;
    }
    if (isNaN(parseInt(population))) {
      console.error(`line '${line}': invalid population '${population}'`);
      continue;
    }
    if (isNaN(parseInt(area))) {
      console.error(`line '${line}': invalid area '${area}'`);
      continue;
    }
    if (isNaN(parseInt(density))) {
      console.error(`line '${line}': invalid density '${density}'`);
      continue;
    }
    if (!country) {
      console.error(`line '${line}': missing country name`);
      continue;
    }

    const c: City = new City(
      cityName.trim(),
      parseInt(population),
      parseInt(area),
      parseInt(density),
      country.trim(),
    );

    yield c;
  }
}
