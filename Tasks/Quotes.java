// Step 3
//
// Simplify method with regex to one line

public class Quotes {
    public static String convertQuotes(String input) {
        return input.replaceAll("\"(.*?)\"", "«$1»");
    }
}