package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class LongestTest {
    @Test
    public void testFindLongest() {
        // Test cases
        assertEquals(
                "Barcelona",
                Longest.findLongest(List.of("Roma", "Kiev", "Beijing", "Barcelona", "Omsk"))
        );

        assertEquals(
                "Barcelona",
                Longest.findLongest(List.of("Barcelona", "Roma", "Kiev", "Beijing", "Omsk"))
        );

        assertEquals(
                "Barcelona",
                Longest.findLongest(List.of("Roma", "Kiev", "Beijing", "Omsk", "Barcelona"))
        );

        assertEquals(
                "Roma",
                Longest.findLongest(List.of("Roma", "Kiev", "Omsk"))
        );

        assertEquals(
                "Roma",
                Longest.findLongest(List.of("Roma"))
        );

        assertEquals(
                "Not found",
                Longest.findLongest(List.of())
        );

        assertEquals(
                "Not found",
                Longest.findLongest(null)
        );
    }
}