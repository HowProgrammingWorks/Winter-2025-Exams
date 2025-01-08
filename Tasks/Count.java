import java.util.Map;

import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

// Step 1
//
// Remove empty blocks
// Make code runnable in Java
// Make sum atomic to be able to use it in lambda expression

public class Count {
    public static <K, V> int count(Map<K, V> obj) {
        AtomicInteger sum = new AtomicInteger();
        var keys = obj.keySet();
        keys.forEach((key) -> {
            var value = obj.get(key);
            if (value instanceof Number) sum.addAndGet(((Number) value).intValue());
        });
        return sum.get();
    }
}