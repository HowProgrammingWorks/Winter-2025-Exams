package com.exams.tasks;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BetweenTest {

    @Test
    public void testGetValueBetween() {
        // Test case 1: Text contains the substring between the delimiters
        String input1 = "Hello <username> and bye!";
        String expected1 = "username";
        assertEquals(expected1, Between.getValueBetween(input1, "<", ">"));

        // Test case 2: Text starts and ends with the delimiters
        String input2 = "<username>";
        String expected2 = "username";
        assertEquals(expected2, Between.getValueBetween(input2, "<", ">"));

        // Test case 3: Text does not contain the delimiters
        String input3 = "Hello username and bye!";
        String expected3 = "";
        assertEquals(expected3, Between.getValueBetween(input3, "<", ">"));

        // Test case 4: Empty input string
        String input4 = "";
        String expected4 = "";
        assertEquals(expected4, Between.getValueBetween(input4, "<", ">"));

        // Test case 5: Delimiters are not found
        String input5 = "No delimiters here";
        String expected5 = "";
        assertEquals(expected5, Between.getValueBetween(input5, "<", ">"));

        // Test case 6: Delimiters exist but no text between them
        String input6 = "Empty <> delimiters";
        String expected6 = "";
        assertEquals(expected6, Between.getValueBetween(input6, "<", ">"));
    }

}