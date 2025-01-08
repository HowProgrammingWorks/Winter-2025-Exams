package com.exams.tasks;

import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class TypesTest {
    @Test
    public void testCountTypes() {
        assertEquals(
                Map.of("number", 2, "boolean", 1, "string", 2),
                Types.countTypes(List.of(5, true, "string", 7, "hello"))
        );

        assertEquals(
                Map.of("number", 0, "boolean", 2, "string", 0),
                Types.countTypes(List.of(true, true))
        );

        assertEquals(
                Map.of("number", 0, "boolean", 0, "string", 0),
                Types.countTypes(List.of())
        );

        assertEquals(
                Map.of("number", 1, "boolean", 0, "string", 0),
                Types.countTypes(List.of(100))
        );
    }
}