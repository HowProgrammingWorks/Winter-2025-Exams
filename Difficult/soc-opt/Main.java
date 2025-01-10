// Step 4
//
// Create a Main class

import java.util.List;

public class Main {
    public static void main(String[] args) {
        String data = """
                  Shanghai,24256800,6340,3826,China
                  Delhi,16787941,1484,11313,India
                  Lagos,16060303,1171,13712,Nigeria
                  Istanbul,14160467,5461,2593,Turkey
                  Tokyo,13513734,2191,6168,Japan
                  Sao Paulo,12038175,1521,7914,Brazil
                  Mexico City,8874724,1486,5974,Mexico
                  London,8673713,1572,5431,United Kingdom
                  New York City,8537673,784,10892,United States
                  Bangkok,8280925,1569,5279,Thailand
                """;

        CityParser parser = new CityParser();
        List<City> cities = parser.parse(data);

        CityUtilities.calculateDensityPercentages(cities);
        CityUtilities.sortCitiesByDensityPercentage(cities);

        for (City city : cities) {
            System.out.println(city);
        }
    }
}
