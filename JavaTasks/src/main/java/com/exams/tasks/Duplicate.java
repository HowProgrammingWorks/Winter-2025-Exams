package com.exams.tasks;

import java.util.ArrayList;
import java.util.List;

public class Duplicate {

    public static List<String> duplicate(String value, int N) {
        List<String> res = new ArrayList<>();
        if (N <= 0) {
            return res;
        }
        for (int i = 0; i < N; i++) {
            res.add(value);
        }
        return res;
    }
}

