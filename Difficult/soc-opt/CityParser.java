// Step 2
//
// Create a CityParser class

import java.util.ArrayList;
import java.util.List;

public class CityParser {
    private static final int NAME_INDEX = 0;
    private static final int POPULATION_INDEX = 1;
    private static final int AREA_INDEX = 2;
    private static final int DENSITY_INDEX = 3;
    private static final int REGION_INDEX = 4;

    public List<City> parse(String data) {
        List<City> cities = new ArrayList<>();

        for (String line : data.split("\n")) {
            String[] cells = line.split(",");

            cities.add(
                    new City(
                            cells[NAME_INDEX].trim(),
                            Integer.parseInt(cells[POPULATION_INDEX].trim()),
                            Integer.parseInt(cells[AREA_INDEX].trim()),
                            Integer.parseInt(cells[DENSITY_INDEX].trim()),
                            cells[REGION_INDEX].trim()
                    ));
        }

        return cities;
    }
}