import java.util.ArrayList;
import java.util.List;

// Step 1
//
// Fix formatting
// Add empty line between semantic blocks
// Add constant for IP size
// Rename variables to be more descriptive
// Replace equals("") with isEmpty()

public class Ip {
    private static final int IP_SIZE = 4;

    public static List<Integer> parseIp(String ip) {
        List<Integer> ipSegments = new ArrayList<>();

        if (ip.isEmpty()) {
            return null;
        } else {
            String[] segments = ip.split("\\.");

            if (segments.length != IP_SIZE) return null;

            int index = 0;
            for (String segment : segments) {
                try {
                    ipSegments.add(index, Integer.parseInt(segment));
                } catch (NumberFormatException e) {
                    return null;
                }

                index++;
            }
        }

        return ipSegments;
    }
}