package com.exams.tasks;
import java.util.List;
public class Longest {
    public static String findLongest(List<String> strings) {
        if (strings == null || strings.isEmpty()) {
            return "Not found";
        }

        String longest = "Not found";
        int maxLength = 0;

        for (String str : strings) {
            if (str.length() > maxLength) {
                maxLength = str.length();
                longest = str;
            }
        }

        return longest;
    }
}
