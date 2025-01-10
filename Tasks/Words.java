// Step 4
//
// Combine the if statement and return statement using
// a ternary operator for conciseness
// Add empty line for better readability

public class Words {
    public static int countWords(String input) {
        String trimmedInput = input.trim();

        return trimmedInput.isEmpty() ? 0 : trimmedInput.split("\\s+").length;
    }
}
