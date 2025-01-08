package com.exams.tasks;

import java.util.Map;

public class Counter {
    public static int count(Map<String, Object> obj) {
        int sum = 0;

        for (Map.Entry<String, Object> entry : obj.entrySet()) {
            Object value = entry.getValue();

            if (value instanceof Number) {
                sum += ((Number) value).intValue();
            }
        }
        return sum;
    }

}

