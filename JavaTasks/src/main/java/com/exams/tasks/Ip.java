package com.exams.tasks;

public class Ip {
    public static int[] parse(String ip) {
        if (ip.isEmpty()) return null;

        String[] parts = ip.split("\\.");
        if (parts.length != 4) return null;

        int[] result = new int[4];
        for (int i = 0; i < parts.length; i++) {
            try {
                result[i] = Integer.parseInt(parts[i]);
                if (result[i] < 0 || result[i] > 255) {
                    return null;
                }
            } catch (NumberFormatException e) {
                return null;
            }
        }
        return result;
    }
}

