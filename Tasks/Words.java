// Step 3
//
// Simplify code by using regex
// Add empty lines for better readability

public class Words {
    public static int countWords(String input) {
        String trimmedInput = input.trim();

        if (trimmedInput.isEmpty()) {
            return 0;
        }

        return trimmedInput.split("\\s+").length;
    }
}