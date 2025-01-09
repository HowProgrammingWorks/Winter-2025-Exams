// Step 0
//
// Convert into java as close as possible

public class Words {
    public static int words(String s) {
        int number_of_words_in_s = 0;
        boolean flag = false;
        for (char c : s.toCharArray()) {
            if (!flag) {
                if (c == ' ') {
                    if (flag == true) {
                        flag = false;
                    } else {
                        flag = false;
                    }
                } else {
                    if (flag == true) {
                        flag = true;
                    } else {
                        flag = true;
                    }
                    number_of_words_in_s++;
                }
            } else {
                if (c == ' ') {
                    if (flag == true) {
                        flag = false;
                    } else {
                        flag = false;
                    }
                } else {
                    if (flag == true) {
                        flag = true;
                    } else {
                        flag = true;
                    }
                }
            }
        }
        return number_of_words_in_s;
    }
}