package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class ReverseTest {
    @Test
    public void testReverse() {
        // Test cases
        assertEquals(
                Map.of("uno", "a", "due", "b", "tre", "c"),
                Reverse.reverse(Map.of("a", "uno", "b", "due", "c", "tre"))
        );

        assertEquals(
                Map.of("1", "a", "2", "b", "3", "c"),
                Reverse.reverse(Map.of("a", 1, "b", 2, "c", 3))
        );

        assertEquals(
                Map.of("true", "a", "false", "b"),
                Reverse.reverse(Map.of("a", true, "b", false))
        );

        assertEquals(
                Map.of("uno", "a", "2", "b", "false", "c"),
                Reverse.reverse(Map.of("a", "uno", "b", 2, "c", false))
        );
    }
}