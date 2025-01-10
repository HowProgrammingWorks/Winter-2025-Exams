import { City } from "./city";

export class CityStatistics extends City {
  densityPercentage: number;

  constructor(data: City, maxDensity: number) {
    super(data.name, data.population, data.area, data.density, data.country);
    this.densityPercentage = Math.round((data.density / maxDensity) * 100);
  }
}

export function generateCitiesStatistics(cities: City[]): CityStatistics[] {
  const maxDensity = Math.max(...cities.map((c) => c.density));

  return cities.map((city) => {
    return new CityStatistics(city, maxDensity);
  });
}
