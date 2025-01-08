// Step 3: Change for-each to for, add more checks, avoid magic chars.
public class Words {
    public static int countWords(String str) {
        if (str.length() == 0) {
            return 0;
        }
        
        char empty = ' '; 
        int countWords = 0;
        if (str.charAt(0) != empty) {
            countWords++;
        }
        
        for (int i = 0; i < str.length() - 1; i++) { 
            if ((str.charAt(i) == empty) && (str.charAt(i + 1) != empty)) {
                countWords++;
            } 
        } 
        return countWords;
    }
}