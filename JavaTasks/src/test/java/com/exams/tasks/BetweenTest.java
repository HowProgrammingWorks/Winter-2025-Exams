package com.exams.tasks;

import org.junit.jupiter.api.Test;

import static com.exams.tasks.Between.getValueBetween;
import static org.junit.jupiter.api.Assertions.*;
class BetweenTest {
    @Test
    public void testGetValueBetween() {
        assertEquals("username",
                getValueBetween("Hello <username> and bye!", "<", ">"),
                "Failed: Expected 'username'");

        assertEquals("username",
                getValueBetween("<username>", "<", ">"),
                "Failed: Expected 'username'");

        assertEquals("",
                getValueBetween("Hello username and bye!", "<", ">"),
                "Failed: Expected an empty string");
    }
}