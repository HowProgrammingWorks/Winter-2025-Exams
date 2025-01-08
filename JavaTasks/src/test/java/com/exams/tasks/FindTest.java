package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class FindTest {
    @Test
    public void testFind() {
        Map<String, Object> case1 = new HashMap<>();
        case1.put("a", 1);
        case1.put("b", 2);
        case1.put("c", "hello");
        case1.put("d", false);
        assertEquals("c", Find.find(case1, "hello"));

        Map<String, Object> case2 = new HashMap<>();
        case2.put("a", 1);
        case2.put("b", 2);
        case2.put("c", "str");
        case2.put("d", false);
        assertNull(Find.find(case2, "hello"));

        Map<String, Object> case3 = new HashMap<>();
        case3.put("a", 1);
        case3.put("b", 2);
        case3.put("c", "hello");
        case3.put("d", false);
        assertEquals("b", Find.find(case3, 2));

        Map<String, Object> case4 = new HashMap<>();
        case4.put("a", 1);
        case4.put("b", 2);
        case4.put("c", "hello");
        case4.put("d", false);
        assertEquals("d", Find.find(case4, false));

        Map<String, Object> case5 = new HashMap<>();
        case5.put("a", 1);
        case5.put("b", 2);
        case5.put("c", "hello");
        case5.put("d", true);
        assertEquals("d", Find.find(case5, true));
    }

}