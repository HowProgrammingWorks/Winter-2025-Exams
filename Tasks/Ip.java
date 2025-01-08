import java.util.ArrayList;
import java.util.List;

// Step 0
//
// Convert into java as close as possible

public class Ip {
    public static List<Integer> parseIp(String i) {
        List<Integer> a = new ArrayList<>();
        if (i.equals("")) return null;
        else {
            String[] B = i.split("\\.");
            if (B.length != 4) return null;
            int j = 0;
            for (String b : B) {
                try {
                    a.add(j, Integer.parseInt(b));
                } catch (NumberFormatException e) {
                    return null;
                }
                j++;
            }
        }
        return a;
    }
}