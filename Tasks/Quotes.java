// Step 0
//
// Convert into java as close as possible

public class Quotes {
    public static final String EMPTY = "";

    public static String quotes(String s) {
        StringBuilder res = new StringBuilder();
        boolean open = false;
        for (char c : s.toCharArray()) {
            if (c == '"') {
                for (char i : String.valueOf(c).toCharArray()) {
                    if (!open) {
                        res.append('«');
                        open = true;
                    } else {
                        res.append('»');
                        open = false;
                    }
                }
            } else {
                if (c != '"') {
                    for (char i : String.valueOf(c).toCharArray()) {
                        res.append(i);
                    }
                }
            }
        }
        return String.join(EMPTY, res);
    }
}