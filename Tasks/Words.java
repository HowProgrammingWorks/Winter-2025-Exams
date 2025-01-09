// Step 2
//
// Further simplify if-else statements
// Fix naming
// Add empty lines for better readability

public class Words {
    public static int countWords(String input) {
        int wordCount = 0;
        boolean inWord = false;

        for (char character : input.toCharArray()) {
            if (!inWord && character != ' ') {
                inWord = true;
                wordCount++;
            } else {
                inWord = character != ' ';
            }
        }

        return wordCount;
    }
}