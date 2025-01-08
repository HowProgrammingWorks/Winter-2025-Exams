package com.exams.tasks;
import java.util.HashMap;
import java.util.Map;
public class Reverse {
    public static Map<String, String> reverse(Map<String, Object> input) {
        Map<String, String> reversedMap = new HashMap<>();

        for (Map.Entry<String, Object> entry : input.entrySet()) {
            String key = entry.getKey();
            String value = String.valueOf(entry.getValue());
            reversedMap.put(value, key);
        }

        return reversedMap;
    }
}
