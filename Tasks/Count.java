import java.util.Map;

// Step 3
//
// Replace Collection.forEach() with for-each loop
// Replace atomic sum with int sum
// Iterate over the "entrySet" instead of the "keySet"


public class Count {
    public static <K, V> int count(Map<K, V> map) {
        int sum = 0;
        for (Map.Entry<K, V> set : map.entrySet()) {
            if (set.getValue() instanceof Number number) sum += number.intValue();
        }
        return sum;
    }
}