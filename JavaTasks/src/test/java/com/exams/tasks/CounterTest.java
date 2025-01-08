package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class CounterTest {
    @Test
    public void testCount() {
        Map<String, Object> case1 = new HashMap<>();
        case1.put("a", 1);
        case1.put("b", "two");
        case1.put("c", 3);
        case1.put("d", 4);
        assertEquals(8, Counter.count(case1));

        Map<String, Object> case2 = new HashMap<>();
        case2.put("a", 1);
        case2.put("b", "two");
        case2.put("c", -3);
        case2.put("d", 4);
        assertEquals(2, Counter.count(case2));

        Map<String, Object> case3 = new HashMap<>();
        case3.put("a", 0);
        case3.put("b", "two");
        case3.put("c", 0);
        case3.put("d", -1);
        assertEquals(-1, Counter.count(case3));

        Map<String, Object> case4 = new HashMap<>();
        case4.put("a", -1);
        case4.put("b", "two");
        case4.put("c", -3);
        case4.put("d", -4);
        assertEquals(-8, Counter.count(case4));

        Map<String, Object> case5 = new HashMap<>();
        case5.put("a", 1);
        case5.put("b", "two");
        case5.put("c", -1);
        case5.put("d", 0);
        assertEquals(0, Counter.count(case5));

        Map<String, Object> case6 = new HashMap<>();
        case6.put("a", "1");
        case6.put("b", "two");
        case6.put("c", 3);
        case6.put("d", 4);
        assertEquals(7, Counter.count(case6));
    }

}