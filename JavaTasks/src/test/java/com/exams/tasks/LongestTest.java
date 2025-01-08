package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class LongestTest {
    @Test
    public void testLongest() {
        List<String> case1 = Arrays.asList("Roma", "Kiev", "Beijing", "Barcelona", "Omsk");
        assertEquals("Barcelona", Longest.longest(case1));

        List<String> case2 = Arrays.asList("Barcelona", "Roma", "Kiev", "Beijing", "Omsk");
        assertEquals("Barcelona", Longest.longest(case2));

        List<String> case3 = Arrays.asList("Roma", "Kiev", "Beijing", "Omsk", "Barcelona");
        assertEquals("Barcelona", Longest.longest(case3));

        List<String> case4 = Arrays.asList("Roma", "Kiev", "Omsk");
        assertEquals("Roma", Longest.longest(case4));

        List<String> case5 = Arrays.asList("Roma");
        assertEquals("Roma", Longest.longest(case5));

        List<String> case6 = Arrays.asList();
        assertEquals("Not found", Longest.longest(case6));

        List<String> case7 = null;
        assertEquals("Not found", Longest.longest(case7));
    }

}