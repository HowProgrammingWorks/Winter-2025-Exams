// Step 3
//
// Create a CityService class

import java.util.Comparator;
import java.util.List;

public class CityUtilities {
    public static void calculateDensityPercentages(List<City> cities) {
        int maxDensity = cities.stream().mapToInt(City::getDensity).max().orElse(1);

        for (City city : cities) {
            double densityPercentage = (city.getDensity() * 100.0) / maxDensity;
            city.setDensityPercentage(densityPercentage);
        }
    }

    public static void sortCitiesByDensityPercentage(List<City> cities) {
        cities.sort(Comparator.comparingDouble(City::getDensityPercentage).reversed());
    }
}