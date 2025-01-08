import java.util.Map;

// Step 4
//
// Format code
// Add empty line between semantic blocks

public class Count {
    public static <K, V> int count(Map<K, V> map) {
        int sum = 0;

        for (Map.Entry<K, V> set : map.entrySet()) {
            if (set.getValue() instanceof Number number) sum += number.intValue();
        }

        return sum;
    }
}