//Step 1: Change naming of identifiers

public class Words {
    public static int countWords(String str) {
    int countWords = 0;
    boolean inWord = false;

    for (char c : str.toCharArray()) {
        if (!inWord) {
            if (c == ' ') {
                inWord = false;
            } else {
                inWord = true;
                countWords++;
            }
        } else {
            if (c == ' ') {
                inWord = false;
            } else {
                inWord = true;
            }
        }
    }
    return countWords;
    }
}