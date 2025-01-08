package com.exams.tasks;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Only {
    public static Map<String, Object> filter(Map<String, Object> map, String... keys) {
        Set<String> keySet = Set.of(keys);
        Map<String, Object> filteredMap = new HashMap<>();

        for (String key : keySet) {
            if (map.containsKey(key)) {
                filteredMap.put(key, map.get(key));
            }
        }
        return filteredMap;
    }
}
