// Step 5
//
// Add tests for CityService class

import org.arcctg.implement.soc_opt.City;
import org.arcctg.implement.soc_opt.CityUtilities;

import java.util.ArrayList;
import java.util.List;

public class CityUtilitiesTest {
    public static void main(String[] args) {
        testUtilities();
    }

    public static void testUtilities() {
        List<City> cities = new ArrayList<>();
        cities.add(new City("City1", 1000000, 500, 2000, "Country1"));
        cities.add(new City("City2", 2000000, 1000, 4000, "Country2"));

        CityUtilities.calculateDensityPercentages(cities);

        assert cities.get(0).getDensityPercentage() == 50.0 : "CityUtilities density percentage test failed for City1";
        assert cities.get(1).getDensityPercentage() == 100.0 : "CityUtilities density percentage test failed for City2";

        CityUtilities.sortCitiesByDensityPercentage(cities);

        assert "City2".equals(cities.get(0).getName()) : "CityUtilities sort test failed for City2";
        assert "City1".equals(cities.get(1).getName()) : "CityUtilities sort test failed for City1";

        System.out.println("CityUtilities calculateDensityPercentages tests passed");
    }
}
