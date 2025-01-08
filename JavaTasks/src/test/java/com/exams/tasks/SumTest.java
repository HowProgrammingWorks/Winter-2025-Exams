package com.exams.tasks;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class SumTest {
    @Test
    public void testSumCalculator() {
        // Test cases
        assertEquals(12, Sum.sum(List.of(5, true, "string", 7, "hello")));
        assertEquals(-2, Sum.sum(List.of(5, true, "string", -7, "hello")));
        assertEquals(0, Sum.sum(List.of(0, true, "string", 0, "hello")));
        assertEquals(0, Sum.sum(List.of(1, true, "string", -1, "hello")));
        assertEquals(5, Sum.sum(List.of(5)));
        assertEquals(-1, Sum.sum(List.of(-1)));
        assertEquals(0, Sum.sum(List.of()));
    }

}