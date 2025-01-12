import { City } from "./city";
import { parseCSV } from "./csv";
import { describe, expect, it } from "@jest/globals";

describe("parseCSV", () => {
  const validCSV = `city,population,area,density,country
Shanghai,24256800,6340,3826,China
Delhi,16787941,1484,11313,India
Lagos,16060303,1171,13712,Nigeria
`;

  const expectedCities = [
    {
      name: "Shanghai",
      population: 24256800,
      area: 6340,
      density: 3826,
      country: "China",
    },
    {
      name: "Delhi",
      population: 16787941,
      area: 1484,
      density: 11313,
      country: "India",
    },
    {
      name: "Lagos",
      population: 16060303,
      area: 1171,
      density: 13712,
      country: "Nigeria",
    },
  ];

  it("should parse valid CSV data correctly", () => {
    const generator = parseCSV(validCSV);
    const cities = Array.from(generator);

    expect(cities.length).toBe(3);

    cities.forEach((city, index) => {
      expect(city).toBeInstanceOf(City);
      expect(city.name).toBe(expectedCities[index].name);
      expect(city.population).toBe(expectedCities[index].population);
      expect(city.area).toBe(expectedCities[index].area);
      expect(city.density).toBe(expectedCities[index].density);
      expect(city.country).toBe(expectedCities[index].country);
    });
  });
});
