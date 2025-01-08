package com.exams.tasks;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Drop {

    public static Map<String, String> drop(Map<String, String> D, String... X) {
        Set<String> XSet = Set.of(X);

        D.keySet().removeIf(key -> XSet.contains(key));

        return D;
    }
    public static void main(String[] args) {
        Map<String, String> testMap = new HashMap<>();
        testMap.put("a", "uno");
        testMap.put("b", "due");
        testMap.put("c", "tre");

        drop(testMap, "b", "f");
        System.out.println(testMap); // Should print {a=uno, c=tre}
    }
}

