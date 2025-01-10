import java.util.Map;

// Step 5
//
// Add Java streams
// Add lambda expression

public class Count {
    public static <K, V> int count(Map<K, V> map) {
        return map.values().stream()
                .filter(Number.class::isInstance)
                .mapToInt(value -> ((Number) value).intValue())
                .sum();
    }
}
