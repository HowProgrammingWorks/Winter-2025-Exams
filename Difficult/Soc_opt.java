import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class CityDataProcessor {

    public List<City> process(String rawData) {
        if (rawData == null || rawData.isEmpty()){
            throw new IllegalArgumentException("Input is null or empty");
        }

        final List<City> cities = new ArrayList<>();

        List<String> lines = Arrays.stream(rawData.split("\\n"))
                .map(String::trim)
                .toList();

        int maxDensity = 0;

        for (String line : lines) {
            String[] fields = line.split(",");

            try {
                String name = fields[0];
                int population = Integer.parseInt(fields[1].trim());
                int area = Integer.parseInt(fields[2].trim());
                int density = Integer.parseInt(fields[3].trim());
                String country = fields[4];

                maxDensity = Math.max(maxDensity, density);
                cities.add(new City(name, population, area, density, country));

            } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
                throw new IllegalArgumentException("Invalid data format");
            }
        }

        calculatePercentageOfMaxDensity(cities, maxDensity);
        sortCitiesByPercentDensity(cities);

        return cities;
    }

    private void calculatePercentageOfMaxDensity(List<City> cities, int maxDensity) {
        for (City city : cities) {
            city.setPercentageDensity(Math.round(city.getDensity() * 100.0 / maxDensity));
        }
    }

    private void sortCitiesByPercentDensity(List<City> cities) {
        cities.sort(Comparator.comparingLong(City::getPercentageDensity).reversed());
    }

    public void display(List<City> cities) {
        if (cities == null || cities.isEmpty()){
            throw new IllegalArgumentException("Input is null or empty");
        }

        System.out.printf("%-18s%10s%8s%10s%18s%12s%n", "City", "Population", "Area", "Density", "Country", "Percentage");
        for (City city : cities) {
            System.out.printf("%-18s%10d%8d%10d%18s%12d%n",
                    city.getName(),
                    city.getPopulation(),
                    city.getArea(),
                    city.getDensity(),
                    city.getCountry(),
                    city.getPercentageDensity());
        }

        System.out.println("\n");
    }
}

class City {
    private final String name;
    private final int population;
    private final int area;
    private final int density;
    private final String country;
    private long percentageDensity;

    public City(String name, int population, int area, int density, String country) {
        this.name = name;
        this.population = population;
        this.area = area;
        this.density = density;
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public int getPopulation() {
        return population;
    }

    public int getArea() {
        return area;
    }

    public int getDensity() {
        return density;
    }

    public String getCountry() {
        return country;
    }

    public long getPercentageDensity() {
        return percentageDensity;
    }

    public void setPercentageDensity(long percentageDensity) {
        this.percentageDensity = percentageDensity;
    }
}