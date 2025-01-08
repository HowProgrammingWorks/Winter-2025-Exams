package com.exams.tasks;

import java.util.ArrayList;
import java.util.List;

public class Plane {

    public static List<Object> flatten(List<Object> input) {
        List<Object> result = new ArrayList<>();

        for (Object element : input) {
            if (element instanceof List) {
                result.addAll(flatten((List<Object>) element));
            } else {
                result.add(element);
            }
        }

        return result;
    }
}
