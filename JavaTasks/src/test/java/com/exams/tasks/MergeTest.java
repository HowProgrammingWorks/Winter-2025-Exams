package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class MergeTest {
    @Test
    public void testMergeDictionaries() {
        // Test cases
        assertEquals(
                Map.of("a", "uno", "b", "due", "c", "tre"),
                Merge.merge(Map.of("a", "uno", "b", "due"), Map.of("c", "tre"))
        );

        assertEquals(
                Map.of("a", "uno", "b", "due"),
                Merge.merge(Map.of("a", "uno", "b", "due"), Map.of("a", "uno"))
        );

        assertEquals(
                Map.of("a", "due", "b", "due"),
                Merge.merge(Map.of("a", "uno", "b", "due"), Map.of("a", "due"))
        );

        assertEquals(
                Map.of("a", "uno", "c", "tre"),
                Merge.merge(Map.of("a", "uno"), Map.of("c", "tre"))
        );

        assertEquals(
                Map.of("a", "uno"),
                Merge.merge(Map.of("a", "uno"), Map.of())
        );

        assertEquals(
                Map.of(),
                Merge.merge(Map.of(), Map.of())
        );
    }

}