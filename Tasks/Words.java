// Step 1
//
// Remove unnecessary if-else statements, simplify other ones
// Format code

public class Words {
    public static int words(String s) {
        int number_of_words_in_s = 0;
        boolean flag = false;
        for (char c : s.toCharArray()) {
            if (!flag) {
                if (c != ' ') {
                    flag = true;
                    number_of_words_in_s++;
                }
            } else {
                flag = c != ' ';
            }
        }
        return number_of_words_in_s;
    }
}