package com.exams.tasks;

import java.util.Map;

public class Find {
    public static String find(Map<String, Object> object, Object value) {
        for (Map.Entry<String, Object> entry : object.entrySet()) {
            if (entry.getValue().equals(value)) {
                return entry.getKey();
            }
        }
        return null;
    }
}

