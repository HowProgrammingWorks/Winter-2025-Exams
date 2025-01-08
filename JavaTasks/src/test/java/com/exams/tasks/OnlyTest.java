package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class OnlyTest {
    @Test
    public void testFilter() {
        // Test cases
        assertEquals(
                Map.of("a", 1, "d", 4),
                Only.filter(Map.of("a", 1, "b", "two", "c", 3, "d", 4), "a", "d")
        );

        assertEquals(
                Map.of("a", 1),
                Only.filter(Map.of("a", 1, "b", "two", "c", 3, "d", 4), "a")
        );

        assertEquals(
                Map.of("d", 4),
                Only.filter(Map.of("a", 1, "b", "two", "c", 3, "d", 4), "d")
        );

        assertEquals(
                Map.of(),
                Only.filter(Map.of("a", 1, "b", "two", "c", 3, "d", 4))
        );

        assertEquals(
                Map.of(),
                Only.filter(Map.of("a", 1), "x")
        );

        assertEquals(
                Map.of(),
                Only.filter(Map.of("a", 1), "")
        );

        assertEquals(
                Map.of(),
                Only.filter(Map.of(), "")
        );
    }

}