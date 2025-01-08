import java.util.Map;

public class Count {
    public static int sumNumbers(Map<String, Object> map) {
        int sum = 0;
        for (Object value : map.values()) {
            if (value instanceof Number) {
                sum += ((Number) value).intValue();
            }
        }
        return sum;
    }
}
