// Step 5
//
// Add tests for City class

import org.arcctg.implement.soc_opt.City;

import java.util.logging.Level;
import java.util.logging.Logger;

public class CityTest {
    public static void main(String[] args) {
        testCity();
    }

    public static void testCity() {
        City city = new City("TestCity", 1000000, 500, 2000, "TestCountry");

        assert "TestCity".equals(city.getName()) : "City name test failed";
        assert city.getPopulation() == 1000000 : "City population test failed";
        assert city.getArea() == 500 : "City area test failed";
        assert city.getDensity() == 2000 : "City density test failed";
        assert "TestCountry".equals(city.getCountry()) : "City country test failed";
        city.setDensityPercentage(50.0);
        assert city.getDensityPercentage() == 50.0 : "City density percentage test failed";

        System.out.println("City test passed");
    }
}
