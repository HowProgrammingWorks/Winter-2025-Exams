// Step 2
//
// Create a CityParser class

import java.util.ArrayList;
import java.util.List;

public class CityParser {
    public List<City> parse(String data) {
        List<City> cities = new ArrayList<>();

        for (String line : data.split("\n")) {
            String[] cells = line.split(",");
            cities.add(
                    new City(
                            cells[0].trim(),
                            Integer.parseInt(cells[1].trim()),
                            Integer.parseInt(cells[2].trim()),
                            Integer.parseInt(cells[3].trim()),
                            cells[4].trim()
                    ));
        }

        return cities;
    }
}