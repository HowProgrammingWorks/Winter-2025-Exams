package com.exams.tasks;

import java.util.List;

public class Sum {
    public static int sum(List<Object> input) {
        int total = 0;
        for (Object element : input) {
            if (element instanceof Number) {
                total += ((Number) element).intValue();
            }
        }
        return total;
    }
}
