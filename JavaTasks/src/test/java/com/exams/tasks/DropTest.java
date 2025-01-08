package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class DropTest {
    @Test
    public void testDrop() {
        Map<String, String> case1 = new HashMap<>();
        case1.put("a", "uno");
        case1.put("b", "due");
        case1.put("c", "tre");
        Map<String, String> expected1 = new HashMap<>();
        expected1.put("a", "uno");
        expected1.put("c", "tre");
        assertEquals(expected1, Drop.drop(case1, "b", "f"));

        Map<String, String> case2 = new HashMap<>();
        case2.put("a", "uno");
        case2.put("b", "due");
        case2.put("c", "tre");
        Map<String, String> expected2 = new HashMap<>();
        expected2.put("a", "uno");
        expected2.put("b", "due");
        expected2.put("c", "tre");
        assertEquals(expected2, Drop.drop(case2));

        Map<String, String> case3 = new HashMap<>();
        case3.put("a", "uno");
        case3.put("b", "due");
        Map<String, String> expected3 = new HashMap<>();
        expected3.put("a", "uno");
        expected3.put("b", "due");
        assertEquals(expected3, Drop.drop(case3, "x", "y"));

        Map<String, String> case4 = new HashMap<>();
        case4.put("a", "uno");
        case4.put("b", "due");
        Map<String, String> expected4 = new HashMap<>();
        assertEquals(expected4, Drop.drop(case4, "b", "a"));
    }

}