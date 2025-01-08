// Step 2
//
// Replace if-else with ternary operator

public class Quotes {
    public static String convertQuotes(String input) {
        StringBuilder result = new StringBuilder();
        boolean isOpen = false;

        for (char character : input.toCharArray()) {
            if (character == '"') {
                result.append(isOpen ? '»' : '«');
                isOpen = !isOpen;
            } else {
                result.append(character);
            }
        }

        return result.toString();
    }
}