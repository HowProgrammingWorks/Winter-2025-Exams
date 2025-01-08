// Step 5
//
// Add tests for CityParser class

import org.arcctg.implement.soc_opt.City;
import org.arcctg.implement.soc_opt.CityParser;

import java.util.List;

public class CityParserTest {
    public static void main(String[] args) {
        testParse();
    }

    public static void testParse() {
        String data = "TestCity,1000000,500,2000,TestCountry\n";
        CityParser parser = new CityParser();
        List<City> cities = parser.parse(data);

        assert cities.size() == 1 : "CityParser size test failed";
        City city = cities.get(0);
        assert "TestCity".equals(city.getName()) : "CityParser name test failed";
        assert city.getPopulation() == 1000000 : "CityParser population test failed";
        assert city.getArea() == 500 : "CityParser area test failed";
        assert city.getDensity() == 2000 : "CityParser density test failed";
        assert "TestCountry".equals(city.getCountry()) : "CityParser country test failed";

        System.out.println("CityParser tests passed");
    }
}
