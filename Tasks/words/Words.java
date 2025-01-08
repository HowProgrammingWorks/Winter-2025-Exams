//Step 2: Delete useless conditions and duplicates
public class Words {
    public static int countWords(String str) {
        int countwords = 0;
        boolean inWord = false;
        
        for (char character : str.toCharArray()) {
            if (character == ' ') {
                inWord = false;
            } else if (!inWord) {
                inWord = true;
                countwords++;
            }
        }
        return countwords;
    }
}