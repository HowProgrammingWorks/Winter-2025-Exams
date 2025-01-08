package com.exams.tasks;

import java.util.HashMap;
import java.util.Map;

public class Merge {

    public static Map<String, String> merge(Map<String, String> map1, Map<String, String> map2) {
        Map<String, String> mergedMap = new HashMap<>(map1);
        mergedMap.putAll(map2);
        return mergedMap;
    }
}
