
// Step 1
//
// Create a City class

public class City {
    private final String name;
    private final int population;
    private final int area;
    private final int density;
    private final String country;
    private double densityPercentage;

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

    public double getDensityPercentage() {
        return densityPercentage;
    }

    public void setDensityPercentage(double densityPercentage) {
        this.densityPercentage = densityPercentage;
    }

    @Override
    public String toString() {
        return String.format(
                "%-18s%10d%8d%8d%18s%6.0f", name, population, area, density, country, densityPercentage);
    }
}