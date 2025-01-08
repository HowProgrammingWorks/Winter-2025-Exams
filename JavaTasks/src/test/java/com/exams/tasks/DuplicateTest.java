package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class DuplicateTest {
    @Test
    public void testDuplicate() {
        List<String> result1 = Duplicate.duplicate("abc", 5);
        List<String> expected1 = Arrays.asList("abc", "abc", "abc", "abc", "abc");
        assertEquals(expected1, result1);

        List<String> result2 = Duplicate.duplicate("abc", 1);
        List<String> expected2 = Arrays.asList("abc");
        assertEquals(expected2, result2);

        List<String> result3 = Duplicate.duplicate("abc", -1);
        List<String> expected3 = Arrays.asList();
        assertEquals(expected3, result3);

        List<String> result4 = Duplicate.duplicate("abc", 0);
        List<String> expected4 = Arrays.asList();
        assertEquals(expected4, result4);

        List<String> result5 = Duplicate.duplicate("", 0);
        List<String> expected5 = Arrays.asList();
        assertEquals(expected5, result5);
    }

}