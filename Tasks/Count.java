import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

// Step 2
//
// Change incoming identifiers name
// Remove the parentheses around the "key" parameter
// Replace instanceof check and cast with "instanceof Number number"
// and use instead of cast expression

public class Count {
    public static <K, V> int count(Map<K, V> map) {
        AtomicInteger sum = new AtomicInteger();
        var keys = map.keySet();
        keys.forEach(key -> {
            var value = map.get(key);
            if (value instanceof Number number) sum.addAndGet(number.intValue());
        });
        return sum.get();
    }
}