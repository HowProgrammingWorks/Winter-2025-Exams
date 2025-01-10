import java.util.ArrayList;
import java.util.List;

import java.util.Arrays;
import java.util.List;

// Step 3
//
// Combine everything into ternary operator
// Add Java streams
// Add lambda expression
// Format the code

public class Ip {
    private static final int IP_SIZE = 4;

    public static List<Integer> parseIp(String ip) {
        List<String> segments = Arrays.asList(ip.split("\\."));

        return segments.size() == IP_SIZE && segments.stream().allMatch(s -> s.matches("\\d+"))
                ? segments.stream().map(Integer::parseInt).toList()
                : null;
    }
}
