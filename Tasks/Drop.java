import java.util.Map;
import java.util.Set;

public class Drop {

    public static Map<String, String> dropKeys(Map<String, String> map, String... keys) {
        if (map == null || keys == null) {
            return map;
        }

        Set<String> keysToRemove = Set.of(keys);

        map.keySet().removeAll(keysToRemove);

        return map;
    }
}
