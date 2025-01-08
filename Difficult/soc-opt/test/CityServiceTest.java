// Step 5
//
// Add tests for CityService class

import org.arcctg.implement.soc_opt.City;
import org.arcctg.implement.soc_opt.CityService;

import java.util.ArrayList;
import java.util.List;

public class CityServiceTest {
    public static void main(String[] args) {
        testService();
    }

    public static void testService() {
        List<City> cities = new ArrayList<>();
        cities.add(new City("City1", 1000000, 500, 2000, "Country1"));
        cities.add(new City("City2", 2000000, 1000, 4000, "Country2"));

        CityService service = new CityService();
        service.calculateDensityPercentages(cities);

        assert cities.get(0).getDensityPercentage() == 50.0 : "CityService density percentage test failed for City1";
        assert cities.get(1).getDensityPercentage() == 100.0 : "CityService density percentage test failed for City2";

        service.sortCitiesByDensityPercentage(cities);

        assert "City2".equals(cities.get(0).getName()) : "CityService sort test failed for City2";
        assert "City1".equals(cities.get(1).getName()) : "CityService sort test failed for City1";

        System.out.println("CityService calculateDensityPercentages tests passed");
    }
}
