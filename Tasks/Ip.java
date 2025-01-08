import java.util.ArrayList;
import java.util.List;

// Step 2
//
// Remove unnecessary if-else block
// Replace try-catch block with regex check

public class Ip {
    private static final int IP_SIZE = 4;

    public static List<Integer> parseIp(String ip) {
        if (ip.isEmpty()) return null;

        String[] segments = ip.split("\\.");
        if (segments.length != IP_SIZE) return null;

        List<Integer> ipSegments = new ArrayList<>();
        for (String segment : segments) {
            if (segment.matches("\\d+")) {
                ipSegments.add(Integer.parseInt(segment));
            } else {
                return null;
            }
        }

        return ipSegments;
    }
}