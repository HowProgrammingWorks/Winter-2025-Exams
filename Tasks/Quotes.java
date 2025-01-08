// Step 1
//
// Fix naming
// Remove unnecessary for-each loops, nested if statement,
// call to String.join() and constant EMPTY
// Format and add empty lines for readability

public class Quotes {
    public static String convertQuotes(String input) {
        StringBuilder result = new StringBuilder();
        boolean isOpen = false;

        for (char character : input.toCharArray()) {
            if (character == '"') {
                if (!isOpen) {
                    result.append('«');
                    isOpen = true;
                } else {
                    result.append('»');
                    isOpen = false;
                }
            } else {
                result.append(character);
            }
        }

        return result.toString();
    }
}