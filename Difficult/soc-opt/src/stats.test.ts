import { City } from "./city"; // Adjust the path as needed
import { CityStatistics, generateCitiesStatistics } from "./stats"; // Adjust the path as needed

import { describe, expect, it } from "@jest/globals";

describe("CityStatistics", () => {
  it("should create a CityStatistics instance correctly", () => {
    const city = new City("Shanghai", 24256800, 6340, 3826, "China");
    const maxDensity = 13712; // Example max density
    const cityStats = new CityStatistics(city, maxDensity);

    expect(cityStats).toBeInstanceOf(CityStatistics);
    expect(cityStats.name).toBe("Shanghai");
    expect(cityStats.population).toBe(24256800);
    expect(cityStats.area).toBe(6340);
    expect(cityStats.density).toBe(3826);
    expect(cityStats.country).toBe("China");
    expect(cityStats.densityPercentage).toBe(Math.round((3826 / 13712) * 100));
  });
});

describe("generateCitiesStatistics", () => {
  it("should generate statistics for a list of cities correctly", () => {
    const cities = [
      new City("Shanghai", 24256800, 6340, 3826, "China"),
      new City("Delhi", 16787941, 1484, 11313, "India"),
      new City("Lagos", 16060303, 1171, 13712, "Nigeria"),
    ];

    const stats = generateCitiesStatistics(cities);

    expect(stats.length).toBe(3);

    const maxDensity = 13712;

    const expectedStats = [
      {
        name: "Shanghai",
        density: 3826,
        densityPercentage: Math.round((3826 / maxDensity) * 100),
      },
      {
        name: "Delhi",
        density: 11313,
        densityPercentage: Math.round((11313 / maxDensity) * 100),
      },
      { name: "Lagos", density: 13712, densityPercentage: 100 },
    ];

    stats.forEach((stat, index) => {
      expect(stat).toBeInstanceOf(CityStatistics);
      expect(stat.name).toBe(expectedStats[index].name);
      expect(stat.density).toBe(expectedStats[index].density);
      expect(stat.densityPercentage).toBe(
        expectedStats[index].densityPercentage,
      );
    });
  });
});
