package com.exams.tasks;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Types {
    public static Map<String, Integer> countTypes(List<Object> items) {
        Map<String, Integer> typeCounts = new HashMap<>();
        typeCounts.put("number", 0);
        typeCounts.put("string", 0);
        typeCounts.put("boolean", 0);

        for (Object item : items) {
            if (item instanceof Number) {
                typeCounts.put("number", typeCounts.get("number") + 1);
            } else if (item instanceof String) {
                typeCounts.put("string", typeCounts.get("string") + 1);
            } else if (item instanceof Boolean) {
                typeCounts.put("boolean", typeCounts.get("boolean") + 1);
            }
        }
        return typeCounts;
    }
}
