package com.exams.tasks;

public class Between {
    public static void main(String[] args) {
        System.out.println(getValueBetween("Hello <username> and bye!", "<", ">").equals("username"));
        System.out.println(getValueBetween("<username>", "<", ">").equals("username"));
        System.out.println(getValueBetween("Hello username and bye!", "<", ">").equals(""));
    }

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
