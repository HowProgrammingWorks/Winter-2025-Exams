import java.util.List;

public class Soc_opt_test {

    public static void main(String[] args) {
        CityDataProcessor processor = new CityDataProcessor();

        runSuccessPathTest1(processor);

        runSuccessPathTest2(processor);

        runErroneousIncorrectInputTest(processor);

        runErroneousNullInputTest(processor);
    }


    private static void runErroneousNullInputTest(CityDataProcessor processor) {
        String data;

        data = null;

        runTest(processor, data);
    }

    private static void runErroneousIncorrectInputTest(CityDataProcessor processor) {
        String data;

        data = """
            abc""";

        runTest(processor, data);
    }

    private static void runSuccessPathTest2(CityDataProcessor processor) {
        String data;

        data = """
            Istanbul,14160467,5461,2593,Turkey
            Tokyo,13513734,2191,6168,Japan
            Sao Paulo,12038175,1521,7914,Brazil
            Mexico City,8874724,1486,5974,Mexico
            London,8673713,1572,5431,United Kingdom
            New York City,8537673,784,10892,United States
            Bangkok,8280925,1569,5279,Thailand""";

        runTest(processor, data);
    }

    private static void runSuccessPathTest1(CityDataProcessor processor) {
        String data;

        data = """
            Shanghai,24256800,6340,3826,China
            Delhi,16787941,1484,11313,India
            Lagos,16060303,1171,13712,Nigeria""";

        runTest(processor, data);
    }

    private static void runTest(CityDataProcessor processor, String data) {
        List<City> processedData;

        try {
            processedData = processor.process(data);
            processor.display(processedData);
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
