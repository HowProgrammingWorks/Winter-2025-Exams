package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PlaneTest {
    @Test
    public void testFlatten() {
        // Test cases
        List<Object> case1Input = List.of(1, List.of(List.of(2)), List.of(3, 4), List.of(5), List.of(6, List.of(7, 8)));
        List<Object> case1Expected = List.of(1, 2, 3, 4, 5, 6, 7, 8);

        List<Object> case2Input = List.of(List.of(List.of(1), List.of(List.of(2))), List.of(List.of(List.of(3, 4), List.of(5)), List.of(6, List.of(7, 8))));
        List<Object> case2Expected = List.of(1, 2, 3, 4, 5, 6, 7, 8);

        List<Object> case3Input = List.of(List.of(1, 2), List.of(3, 4));
        List<Object> case3Expected = List.of(1, 2, 3, 4);

        List<Object> case4Input = List.of(1, 2, 3, 4);
        List<Object> case4Expected = List.of(1, 2, 3, 4);

        List<Object> case5Input = List.of(1);
        List<Object> case5Expected = List.of(1);

        // Run tests
        assertEquals(case1Expected, Plane.flatten(case1Input));
        assertEquals(case2Expected, Plane.flatten(case2Input));
        assertEquals(case3Expected, Plane.flatten(case3Input));
        assertEquals(case4Expected, Plane.flatten(case4Input));
        assertEquals(case5Expected, Plane.flatten(case5Input));
    }

}