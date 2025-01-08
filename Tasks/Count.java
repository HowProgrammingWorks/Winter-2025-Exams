import java.util.Map;

// Step 0
//
// Convert into java as close as possible

public class Count {
    public static <K, V> int count(Map<K, V> obj) {
        int sum = 0;
        {
        }
        var keys = obj.keySet();
        keys.forEach((key) -> {
            [];
            var value = obj.get(key);
            if (value instanceof Number) sum += ((Number) value).intValue();
        });
        ({});
        return sum;
    }
}