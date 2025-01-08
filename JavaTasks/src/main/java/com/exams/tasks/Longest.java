package com.exams.tasks;

import java.util.List;

public class Longest {

    public static String longest(List<String> line) {
        if (line == null || line.isEmpty()) {
            return "Not found";
        }

        String longestString = line.get(0);

        for (String s : line) {
            if (s.length() > longestString.length()) {
                longestString = s;
            }
        }
        return longestString;
    }
}

