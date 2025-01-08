package com.exams.tasks;

public class Between {

    public static String getValueBetween(String input, String prefix, String suffix) {
        if (input == null || prefix == null || suffix == null) {
            return "";
        }

        int prefixIndex = input.indexOf(prefix);
        if (prefixIndex == -1) {
            return "";
        }

        int startIndex = prefixIndex + prefix.length();
        if (startIndex >= input.length()) {
            return "";
        }

        int suffixIndex = input.indexOf(suffix, startIndex);
        if (suffixIndex == -1) {
            return "";
        }

        return input.substring(startIndex, suffixIndex);
    }
}
